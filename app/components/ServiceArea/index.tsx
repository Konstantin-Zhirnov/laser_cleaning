import styles from './ServiceArea.module.css'

export const ServiceArea = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Proudly Serving Vancouver Island</h2>

        <p className={styles.text}>Local. Reliable. Responsive.</p>

        <img src="/images/island.png" alt="Vancouver Island" className={styles.img} />

        <p className={styles.final_text}>
          Based on the Island — ready to support local businesses.
        </p>
      </div>
    </section>
  )
}
