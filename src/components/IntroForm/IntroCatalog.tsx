import styles from './IntroForm.module.scss'

export const IntroCatalog = () => {
  return (
    <section className={`${styles.introForm} ${styles.introCatalog}`}>
      <div className={`${styles.top}`}>
        <h1>Попутчики</h1>
      </div>
    </section>
  )
}