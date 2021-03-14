import Link from 'next/link'

const EventItem = ({ id, title, image, date, location }) => {
  const readableDate = new Date(date).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formatedAddress = location.replace(', ', '\n')

  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{readableDate}</time>
        </div>
        <div>
          <address>{formatedAddress}</address>
        </div>
        <div>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem
