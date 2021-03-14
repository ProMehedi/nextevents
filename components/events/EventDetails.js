import styles from '../../styles/EventDetails.module.css'
import AddressIcon from '../icons/AddressIcon'
import DateIcon from '../icons/DateIcon'

const EventDetails = ({ title, date, desc, image, location }) => {
  const readableDate = new Date(date).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formatedAddress = location.replace(', ', '\n')

  return (
    <>
      <div className={styles.summary}>
        <h1>{title}</h1>
      </div>
      <section className={styles.logistics}>
        <div className={styles.image}>
          <img src={`/${image}`} alt={title} />
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.icon}>
              <DateIcon />
            </span>
            {readableDate}
          </li>
          <li className={styles.item}>
            <span className={styles.icon}>
              <AddressIcon />
            </span>
            <address>{formatedAddress}</address>
          </li>
        </ul>
      </section>
      <div className={styles.content}>
        <p>{desc}</p>
      </div>
    </>
  )
}

export default EventDetails
