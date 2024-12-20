import { useTranslation } from 'react-i18next'
import styles from './NextStepButton.module.scss'

type NextStepButtonProps = {
  onClick: () => void
}

export const NextStepButton = ({ onClick }: NextStepButtonProps) => {
  const { t } = useTranslation('translation')
  
  return (
    <button className={styles.nextStepButton} onClick={() => onClick()}>
      {t('nextStep')}
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
