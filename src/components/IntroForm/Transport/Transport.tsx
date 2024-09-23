import styles from './Transport.module.scss'
import { TRANSPORT_TYPES_LIST } from '../../../utils/consts'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { getTransportType } from '../../../store/formData/formDataSelector'
import { changeTransportType } from '../../../store/formData/formDataSlice'

export const Transport = () => {
  const dispatch = useAppDispatch()
  const transport = useAppSelector(getTransportType)

  return (
    <ul className={`${styles.iconList}`}>
      {TRANSPORT_TYPES_LIST.map((transportType) => (
        <li
          key={transportType.type}
          className={`${transport.includes(transportType.type) ? styles.active : ''}`}
          onClick={() => dispatch(changeTransportType(transportType.type))}
        >
          <button>
            <img src={transportType.icon} width={22} height={22} alt={transportType.alt} />
          </button>
        </li>
      ))}
    </ul>
  )
}
