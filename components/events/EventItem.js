import Image from 'next/image'
import styles from '../../styles/EventItem.module.css'
import AddressIcon from '../icons/AddressIcon'
import ArrowRightIcon from '../icons/ArrowRightIcon'
import DateIcon from '../icons/DateIcon'
import Button from '../ui/Button'

const EventItem = ({ id, title, image, date, location }) => {
  const readableDate = new Date(date).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formatedAddress = location.replace(', ', '\n')

  return (
    <li className={styles.item}>
      <Image src={image} alt={title} width='260' height='130' />
      <div className={styles.content}>
        <div>
          <h2>{title}</h2>
        </div>
        <div className={styles.date}>
          <span className={styles.icon}>
            <DateIcon />
          </span>
          <time>{readableDate}</time>
        </div>
        <div className={styles.address}>
          <span className={styles.icon}>
            <AddressIcon />
          </span>
          <address>{formatedAddress}</address>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
