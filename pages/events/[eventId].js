import EventDetails from '../../components/events/EventDetails'
import { getEventById, getEvents } from '../../helper/ApiUtils'

const SingleEventsPage = ({ event }) => {
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

export const getStaticProps = async (ctx) => {
  const { eventId } = ctx.params
  const event = await getEventById(eventId)

  return {
    props: {
      event,
    },
  }
}

export const getStaticPaths = async () => {
  const events = await getEvents()

  const paths = events.map((event) => ({ params: { eventId: event.id } }))

  return {
    paths,
    fallback: false,
  }
}

export default SingleEventsPage
