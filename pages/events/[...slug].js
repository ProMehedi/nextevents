import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import EventList from '../../components/events/EventList'
import ResultTitle from '../../components/events/ResultTitle'
import Button from '../../components/ui/Button'
import ErrorAlert from '../../components/ui/ErrorAlert'

const EventArchivePage = () => {
  const [events, setEvents] = useState([])
  const router = useRouter()
  const { slug } = router.query

  const { data, error } = useSWR(
    'https://next-events-199e7-default-rtdb.firebaseio.com/events.json'
  )

  useEffect(() => {
    if (data) {
      const eventsData = []

      for (const event in data) {
        eventsData.push({
          id: event,
          ...data[event],
        })
      }
      setEvents(eventsData)
    }
  }, [data])

  if (!slug || !data) {
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
    month < 1 ||
    error
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

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    )
  })

  if (!filteredEvents || filteredEvents.length === 0) {
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
      <EventList events={filteredEvents} />
    </>
  )
}

// export const getServerSideProps = async (contex) => {
//   const { slug } = contex.params
//   const year = Number(slug[0])
//   const month = Number(slug[1])

//   const date = Date(year, month - 1)

//   if (
//     isNaN(year) ||
//     isNaN(month) ||
//     year > 2030 ||
//     year < 2021 ||
//     month > 12 ||
//     month < 1
//   )
//     return { props: { hasError: true } }

//   const events = await getFilteredEvents({ year, month })

//   return {
//     props: { events, date },
//   }
// }

export default EventArchivePage
