import { useRouter } from 'next/router'
import EventList from '../../components/events/EventList'
import ResultTitle from '../../components/events/ResultTitle'
import Button from '../../components/ui/Button'
import ErrorAlert from '../../components/ui/ErrorAlert'
import { getFilteredEvents } from '../../dummy-data'

const EventArchivePage = () => {
  const router = useRouter()
  const { slug } = router.query

  if (!slug) {
    return (
      <center>
        <h1>Loading...</h1>
      </center>
    )
  }

  const year = Number(slug[0])
  const month = Number(slug[1])

  const date = Date(year, month - 1)

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month > 12 ||
    month < 1
  ) {
    return (
      <center>
        <ResultTitle date={date} />
        <ErrorAlert>
          Invalid Filtered, Please adjust your filter correctly!
        </ErrorAlert>
      </center>
    )
  }

  const events = getFilteredEvents({ year, month })

  if (!events || events.length === 0) {
    return (
      <center>
        <ResultTitle date={date} />
        <ErrorAlert>No Events Found!</ErrorAlert>
        <Button link='/events'>Brose All Events</Button>
      </center>
    )
  }

  return (
    <>
      <ResultTitle date={date} />
      <center>
        <Button link='/events'>Brose All Events</Button>
      </center>
      <EventList events={events} />
    </>
  )
}

export default EventArchivePage
