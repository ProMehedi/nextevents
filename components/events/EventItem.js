import Link from 'next/link'
import styles from '../../styles/EventItem.module.css'

const EventItem = ({ id, title, image, date, location }) => {
  const readableDate = new Date(date).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formatedAddress = location.replace(', ', '\n')

  return (
    <li className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <div>
          <h2>{title}</h2>
        </div>
        <div className={styles.date}>
          <time>{readableDate}</time>
        </div>
        <div className={styles.address}>
          <address>{formatedAddress}</address>
        </div>
        <div className={styles.actions}>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem
