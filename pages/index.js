import EventList from '../components/events/EventList'
import { getFeaturedEvent } from '../helper/ApiUtils'

const HomePage = ({ featuredEvents }) => {
  if (!featuredEvents) {
    return (
      <center>
        <h1>Loading...</h1>
      </center>
    )
  }

  if (!featuredEvents) {
    return <h1>No Event Found!</h1>
  }

  return (
    <>
      <EventList events={featuredEvents} />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const featuredEvents = await getFeaturedEvent()

  return {
    props: {
      featuredEvents,
    },
    revalidate: 10,
  }
}

export default HomePage
