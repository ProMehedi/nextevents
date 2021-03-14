import { useRouter } from 'next/router'
import EventDetails from '../../components/events/EventDetails'
import { getEventById } from '../../dummy-data'

const SingleEventsPage = () => {
  const router = useRouter()
  const { eventId } = router.query
  const event = getEventById(eventId)

  if (!event) {
    return (
      <center>
        <h1>Loading...</h1>
      </center>
    )
  }

  const { id, title, date, description, image, isFeatured, location } = event

  if (!event) {
    return <h1>No Event Found!</h1>
  }

  return (
    <div>
      <EventDetails
        title={title}
        desc={description}
        image={image}
        location={location}
        date={date}
      />
    </div>
  )
}

export default SingleEventsPage
