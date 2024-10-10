import styles from './ShowMoreButton.module.scss'

type ShowMoreButtonProps = {
  showMoreCards: () => void
}

export const ShowMoreButton = ({showMoreCards}: ShowMoreButtonProps) => {
  return (
    <button className={styles.showMore} onClick={showMoreCards}>
      <svg
        width='26'
        height='26'
        viewBox='0 0 26 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect y='12' width='26' height='2' rx='2' fill='#1D2E5B' />
        <rect
          x='12'
          y='26'
          width='26'
          height='2'
          rx='2'
          transform='rotate(-90 12 26)'
          fill='#1D2E5B'
        />
      </svg>
      Показать еще
    </button>
  )
}