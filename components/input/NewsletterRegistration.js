import { useState } from 'react'
import ErrorAlert from '../ui/ErrorAlert'
import styles from './NewsletterRegistration.module.css'

const NewsletterRegistration = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState()
  const registrationHandler = async (event) => {
    event.preventDefault()

    setMessage(null)

    const reqData = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const resData = await reqData.json()
    setEmail('')
    setMessage(resData.message)
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Register</button>
        </div>
      </form>
      {message && (
        <>
          <ErrorAlert>
            <span className='newsLetterAlert'>{message}</span>
          </ErrorAlert>
          <style jsx>{`
            .newsLetterAlert {
              font-size: 0.8rem;
              display: block;
            }
          `}</style>
        </>
      )}
    </section>
  )
}

export default NewsletterRegistration
