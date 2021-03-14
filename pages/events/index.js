import EventList from '../../components/events/EventList'
import { getAllEvents } from '../../dummy-data'

const EventsPage = () => {
  const events = getAllEvents()

  if (!events) {
    return (
      <center>
        <h1>Loading...</h1>
      </center>
    )
  }

  if (!events) {
    return <h1>No Event Found!</h1>
  }

  return (
    <div>
      <EventList events={events} />
    </div>
  )
}

export default EventsPage
