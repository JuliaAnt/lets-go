import { useEffect, useState } from 'react'
import {
  format,
  startOfMonth,
  addDays,
  isBefore,
  isWithinInterval,
  startOfWeek,
  isSameDay,
  subMonths,
  addMonths,
  parse,
} from 'date-fns'
import { ru } from 'date-fns/locale'
import styles from './Calendar.module.scss'
import { ReactComponent as ArrowBack } from '../../assets/arrow-back.svg'
import { DAYS_OF_WEEK, MONTHS_LIST } from '../../utils/consts'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { getTravelDates, getTravelDuration } from '../../store/formData/formDataSelector'
import { changeEndTravelDate, changeStartTravelDate } from '../../store/formData/formDataSlice'

const startEndTravelLabel = (date: Date, dateFrom: Date | null, dateTo: Date | null) => {
  let label = ''
  if (dateFrom && isSameDay(date, dateFrom)) {
    label = 'Заезд'
  } else if (dateTo && isSameDay(date, dateTo)) {
    label = 'Выезд'
  }
  return label
}

const getMonthTitle = (date: Date) => {
  const monthIndex = date.getMonth()
  return MONTHS_LIST[monthIndex]
}

const getDayWithMonthAbbreviation = (date: Date) => {
  const day = format(date, 'd', { locale: ru })
  const monthAbbreviation = format(date, 'MMM', { locale: ru }).replace('.', '')
  return `${day} ${monthAbbreviation}`
}

export function CalendarTable() {
  const dispatch = useAppDispatch()
  const travelDatesState = useAppSelector(getTravelDates)

  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [range, setRange] = useState<{ from: Date | null; to: Date | null }>({
    from: null,
    to: null,
  })
  const today = new Date()
  const firstDayOfMonth = startOfMonth(currentMonth)
  const firstDayOfWeek = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 })
  const travelDurationState = useAppSelector(getTravelDuration)

  const generateWeeks = () => {
    const weeks = []
    let currentDay = firstDayOfWeek

    for (let i = 0; i < 6; i++) {
      const week = []
      for (let j = 0; j < 7; j++) {
        week.push(currentDay)
        currentDay = addDays(currentDay, 1)
      }
      weeks.push(week)
    }
    return weeks
  }

  const weeks = generateWeeks()

  const handleDateClick = (date: Date) => {
    if (!range?.from || (range?.from && range?.to)) {
      const endDate = addDays(date, travelDurationState - 1)
      setRange({ from: date, to: endDate })
    } else if (isBefore(date, range.from)) {
      setRange({ from: date, to: range.from })
    } else if (isSameDay(date, range.from)) {
      setRange({ from: date, to: null })
    } else {
      const travelDuration = addDays(range.from, travelDurationState - 1)
      setRange({ from: range.from, to: travelDuration })
    }
  }

  const isSelected = (day: Date) => {
    const { from, to } = range
    return from && to && isWithinInterval(day, { start: from, end: to })
  }

  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  useEffect(() => {
    if (range.from) dispatch(changeStartTravelDate(format(range.from, 'dd.MM.yyyy')))
    if (range.to) dispatch(changeEndTravelDate(format(range.to, 'dd.MM.yyyy')))
  }, [range, dispatch])

  useEffect(() => {
    if (travelDatesState.startDate && travelDatesState.endDate) {
      setRange({
        from: parse(travelDatesState.startDate, 'dd.MM.yyyy', new Date()),
        to: parse(travelDatesState.endDate, 'dd.MM.yyyy', new Date()),
      })
    }
  }, [travelDatesState])

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button
          className={styles.prevMonth}
          type='button'
          aria-label='Прошлый месяц'
          onClick={handlePreviousMonth}
        >
          <ArrowBack />
        </button>
        <p className={styles.currentMonth}>
          {getMonthTitle(currentMonth)} {format(currentMonth, 'yyyy')}
        </p>
        <button
          className={styles.nextMonth}
          type='button'
          aria-label='Следующий месяц'
          onClick={handleNextMonth}
        >
          <ArrowBack />
        </button>
      </div>
      <table className={styles.calendarTable}>
        <thead>
          <tr>
            {DAYS_OF_WEEK.map((day) => {
              return day === 'Сб' || day === 'Вс' ? (
                <th key={day} className={styles.dayOff}>
                  {day}
                </th>
              ) : (
                <th key={day}>{day}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  className={`${
                    isBefore(day, today) && !isSameDay(day, today)
                      ? styles.disabled
                      : styles.activeDate
                  }`}
                >
                  <input
                    type='checkbox'
                    id={`day-${day.getDate()}`}
                    checked={
                      (range.from && isSameDay(day, range.from)) ||
                      (range.to && isSameDay(day, range.to)) ||
                      isSelected(day) ||
                      false
                    }
                    disabled={isBefore(day, today) && !isSameDay(day, today)}
                    onChange={() => {}}
                  />
                  <label
                    htmlFor={`day-${day.getDate()}`}
                    className={`${isSelected(day) ? styles.inRange : ''}`}
                    onClick={() => {
                      if (!isBefore(day, today) || isSameDay(day, today)) {
                        handleDateClick(day)
                      }
                    }}
                  >
                    {day.getDate() === 1 ? getDayWithMonthAbbreviation(day) : format(day, 'd')}
                    <span className={styles.checkIn}>
                      {range.from && range.to && startEndTravelLabel(day, range.from, range.to)}
                    </span>
                  </label>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
