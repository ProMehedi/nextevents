import EventList from '../components/events/EventList'
import { getFeaturedEvents } from '../dummy-data'

const HomePage = () => {
  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <h1>Homepage</h1>
      <EventList events={featuredEvents} />
    </div>
  )
}

export default HomePage