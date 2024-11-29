import styles from './MainButton.module.scss'

type MainButtonProps = {
  text: string
  onClick?: () => void
}

export const MainButton = ({ text, onClick }: MainButtonProps) => {
  return (
    <button className={styles.mainButton} onClick={() => (onClick ? onClick() : undefined)}>
      {text}
      <svg
        width='11'
        height='14'
        viewBox='0 0 11 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M11 7L0.5 13.0622V0.937822L11 7Z' fill='#1D2E5B' />
      </svg>
    </button>
  )
}
