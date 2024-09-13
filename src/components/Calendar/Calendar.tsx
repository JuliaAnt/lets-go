import styles from './Calendar.module.scss';
import { ReactComponent as ArrowBack} from '../../assets/arrow-back.svg';

export const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button className={styles.prevMonth} type="button" aria-label='Прошлый месяц'>
          <ArrowBack/>
        </button>
        <p className={styles.currentMonth}>Март 2019</p>
        <button className={styles.nextMonth} type="button" aria-label='Прошлый месяц'>
          <ArrowBack/>
        </button>
      </div>
      <table className={styles.calendarTable}>
        <thead>
          <tr>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th className={styles.dayOff}>Сб</th>
            <th className={styles.dayOff}>Вс</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td className={styles.disabled}>
            <input type="checkbox" id="february-23" disabled/>
            <label htmlFor="february-23">23</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="february-24" disabled/>
            <label htmlFor="february-24">24</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="february-25" disabled/>
            <label htmlFor="february-25">25</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="february-26" disabled/>
            <label htmlFor="february-26">26</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="february-27" disabled/>
            <label htmlFor="february-27">27</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="february-28" disabled/>
            <label htmlFor="february-28">28</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-01" disabled/>
            <label htmlFor="march-01">
                <span>
                  <span>1 </span>
                  <span className={styles.calendarMonth}>мар</span>
                </span>
              </label>
          </td>
          </tr>
          <tr>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-02" disabled/>
            <label htmlFor="march-02">2</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-03" disabled/>
            <label htmlFor="march-03">3</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-04" disabled/>
            <label htmlFor="march-04">4</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-05" disabled/>
            <label htmlFor="march-05">5</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-06" disabled/>
            <label htmlFor="march-06">6</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-07" disabled/>
            <label htmlFor="march-07">7</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-08" disabled/>
            <label htmlFor="march-08">8</label>
          </td>
          </tr>
          <tr>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-09" disabled/>
            <label htmlFor="march-09">9</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-10" disabled/>
            <label htmlFor="march-10">10</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-11" disabled/>
            <label htmlFor="march-11">11</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-12" disabled/>
            <label htmlFor="march-12">12</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-13" disabled/>
            <label htmlFor="march-13">13</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-14" disabled/>
            <label htmlFor="march-14">14</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-15" disabled/>
            <label htmlFor="march-15">15</label>
          </td>
          </tr>
          <tr>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-16" disabled/>
            <label htmlFor="march-16">16</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-17" disabled/>
            <label htmlFor="march-17">17</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-18" disabled/>
            <label htmlFor="march-18">18</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-19" disabled/>
            <label htmlFor="march-19">19</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-20" disabled/>
            <label htmlFor="march-20">20</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-21" disabled/>
            <label htmlFor="march-21">21</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-22" disabled/>
            <label htmlFor="march-22">22</label>
          </td>
          </tr>
          <tr>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-23" disabled/>
            <label htmlFor="march-23">23</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-24" disabled/>
            <label htmlFor="march-24">24</label>
          </td>
          <td className={styles.disabled}>
            <input type="checkbox" id="march-25" disabled/>
            <label htmlFor="march-25">25</label>
          </td>

            <td className={styles.checked}>
              <input type="checkbox" id="march-26" defaultChecked/>
              <label htmlFor="march-26">26
                <span className={styles.checkIn}>Заезд</span>
              </label>
            </td>
            <td className={styles.checked}>
              <input type="checkbox" id="march-27" defaultChecked/>
              <label htmlFor="march-27">27</label>
            </td>
            <td className={styles.checked}>
              <input type="checkbox" id="march-28" defaultChecked/>
              <label htmlFor="march-28">28
                <span className={styles.departure}>Выезд</span>
              </label>
            </td>
            <td className={styles.activeDate}>
              <input type="checkbox" id="march-29" />
              <label htmlFor="march-29">29</label>
            </td>
          </tr>
          <tr>
            <td className={styles.activeDate}>
              <input type="checkbox" id="march-30" />
              <label htmlFor="march-30">30</label>
            </td>
            <td className={styles.activeDate}>
              <input type="checkbox" id="march-31" />
              <label htmlFor="march-31">31</label>
            </td>
            <td className={styles.activeDate}>
              <input type="checkbox" id="april-01" />
              <label htmlFor="april-01">
                <span>
                  <span>1 </span>
                  <span className={styles.calendarMonth}>апр</span>
                </span>
              </label>
            </td>
            <td className={styles.activeDate}>
              <input type="checkbox" id="april-02" />
              <label htmlFor="april-02">2</label>
            </td>
            <td className={styles.activeDate}>
              <input type="checkbox" id="april-03" />
              <label htmlFor="april-03">3</label>
            </td>
            <td className={styles.activeDate}>
              <input type="checkbox" id="april-04" />
              <label htmlFor="april-04">4</label>
            </td>
            <td className={styles.activeDate}>
              <input type="checkbox" id="april-05" />
              <label htmlFor="april-05">5</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
