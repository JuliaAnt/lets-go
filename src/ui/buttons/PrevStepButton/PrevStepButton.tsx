import { useTranslation } from 'react-i18next'
import styles from './PrevStepButton.module.scss'

type PrevStepButtonProps = {
  onClick: () => void
}

export const PrevStepButton = ({ onClick }: PrevStepButtonProps) => {
  const { t } = useTranslation('translation')

  return (
    <button className={styles.backStep} onClick={() => onClick()}>
      <svg
        width='11'
        height='13'
        viewBox='0 0 11 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M11 6.5001L0.5 12.6381V0.362143L11 6.5001Z' fill='#1D2E5B' />
      </svg>
      {t('prevStep')}
    </button>
  )
}
