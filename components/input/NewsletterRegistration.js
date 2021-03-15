import { useContext, useState } from 'react'
import NotificationContext from '../../store/NotificationContext'
import ErrorAlert from '../ui/ErrorAlert'
import styles from './NewsletterRegistration.module.css'

const NewsletterRegistration = () => {
  const notificationCtx = useContext(NotificationContext)

  const [email, setEmail] = useState('')

  const registrationHandler = async (event) => {
    event.preventDefault()

    notificationCtx.showNotification({
      title: 'Signing up...',
      message: 'Regitering for the newsletter...',
      status: 'pending',
    })

    try {
      const reqData = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const resData = await reqData.json()
      setEmail('')
      notificationCtx.showNotification({
        title: 'Signed Up',
        message: 'Successfully registered for the newsletter',
        status: 'success',
      })
    } catch (error) {
      notificationCtx.showNotification({
        title: 'Signup Error!',
        message: error.message
          ? error.message
          : 'Failed to registered for the newsletter',
        status: 'error',
      })
      throw new Error(
        error.message
          ? error.message
          : 'Failed to registered for the newsletter'
      )
    }
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
    </section>
  )
}

export default NewsletterRegistration
