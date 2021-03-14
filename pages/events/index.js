import { useRouter } from 'next/router'
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch'
import { getAllEvents } from '../../dummy-data'

const EventsPage = () => {
  const events = getAllEvents()

  const router = useRouter()

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

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
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList events={events} />
    </>
  )
}

export default EventsPage
