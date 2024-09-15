import { useState } from 'react'
import {
  format,
  startOfMonth,
  addDays,
  isSameMonth,
  isBefore,
  isWithinInterval,
  startOfWeek,
  isSameDay,
} from 'date-fns'
import styles from './Calendar.module.scss'
import { ReactComponent as ArrowBack } from '../../assets/arrow-back.svg'

const DAYS_OF_WEEK = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

export function CalendarTable() {
  const [range, setRange] = useState<{ from: Date | null; to: Date | null }>({
    from: null,
    to: null,
  })

  const today = new Date()
  const firstDayOfMonth = startOfMonth(today)
  const firstDayOfWeek = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 })

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
      // Если диапазон не выбран или уже выбран полный диапазон, начинаем новый
      setRange({ from: date, to: null })
    } else if (isBefore(date, range.from)) {
      // Если клик на дату до выбранного "from", устанавливаем её как новое начало диапазона
      setRange({ from: date, to: range.from })
    } else if (isSameDay(date, range.from)) {
      // Если нажать на ту же дату, сбрасываем выбор
      setRange({ from: date, to: null })
    } else {
      // Устанавливаем конец диапазона
      setRange({ from: range.from, to: date })
    }
    console.log(`range.from: ${range.from}, range.to: ${range.to}`)
  }

  const isSelected = (day: Date) => {
    const { from, to } = range
    return from && to && isWithinInterval(day, { start: from, end: to })
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button className={styles.prevMonth} type='button' aria-label='Прошлый месяц'>
          <ArrowBack />
        </button>
        <p className={styles.currentMonth}>Март 2019</p>
        <button className={styles.nextMonth} type='button' aria-label='Следующий месяц'>
          <ArrowBack />
        </button>
      </div>
      <table className={styles.calendarTable}>
        <thead>
          <tr>
            {DAYS_OF_WEEK.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  className={`${
                    isBefore(day, today) && !isSameDay(day, today) ? styles.disabled : ''
                  }`}
                >
                  <input
                    type='checkbox'
                    id={`day-${day.getDate()}`}
                    checked={
                      (range.from && isSameDay(day, range.from)) ||
                      (range.to && isSameDay(day, range.to)) ||
                      isSelected(day) ||
                      false // Добавляем проверку для диапазона
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
                    {format(day, 'd')}
                  </label>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {range.from && range.to ? (
          <p>{`Выбран диапазон: ${format(range.from, 'dd.MM.yyyy')} - ${format(
            range.to,
            'dd.MM.yyyy',
          )}`}</p>
        ) : (
          <p>Выберите диапазон дат</p>
        )}
      </div>
    </div>
  )
}
