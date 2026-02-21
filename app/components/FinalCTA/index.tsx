import styles from './FinalCTA.module.css'

export const FinalCTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Ready to Restore Your Equipment or Surfaces?</h2>

        <p>
          Send us photos today and receive a free estimate within 24 hours. No pressure. No
          obligation.
        </p>

        <a
          href="mailto:kostya.zhirnov@gmail.com?subject=Laser%20Cleaning"
          className={styles.button}
        >
          Request Your Free Estimate
        </a>
      </div>
    </section>
  )
}
