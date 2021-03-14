const EventItem = ({ event }) => {
  return (
    <li>
      {event.title} {event.id}
    </li>
  )
}

export default EventItem
