'use client'

import { useForm } from 'react-hook-form'

import { Wrapper } from '../Wrapper'

import styles from './Contact.module.css'

type FormData = { name: string; phone: string; message: string }

export const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    reset()
    alert('Your request has been sent!')
  }

  return (
    <section className={styles.contact} id="contact">
      <Wrapper>
        <h2 className={styles.title}>Get a Free Consultation</h2>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input {...register('name')} placeholder="Your Name" required className={styles.item} />

          <input
            {...register('phone')}
            placeholder="Phone Number"
            required
            className={styles.item}
          />

          <textarea
            {...register('message')}
            placeholder="Describe your project"
            rows={4}
            className={styles.item}
          />

          <button type="submit" className={styles.btn}>
            Submit Request
          </button>
        </form>
      </Wrapper>
    </section>
  )
}
