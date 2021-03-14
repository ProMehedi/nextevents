import EventDetails from '../../components/events/EventDetails'
import { getEventById, getFeaturedEvent } from '../../helper/ApiUtils'

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
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const events = await getFeaturedEvent()

  const paths = events.map((event) => ({ params: { eventId: event.id } }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export default SingleEventsPage
