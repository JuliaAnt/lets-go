import styles from './IntroForm.module.scss'

export const IntroCatalog = () => {
  return (
    <section className={`${styles.introForm} ${styles.introCatalog}`}>
      <div className={`${styles.topWrapper}`}>
        <div className={`${styles.top} ${styles.catalogTop}`}>
          <h1>Попутчики</h1>
        </div>
      </div>
    </section>
  )
}
