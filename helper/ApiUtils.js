export const getEvents = async () => {
  const eventsData = await fetch(
    'https://next-events-199e7-default-rtdb.firebaseio.com/events.json'
  )

  const eventsObj = await eventsData.json()
  const events = []

  for (const event in eventsObj) {
    events.push({
      id: event,
      ...eventsObj[event],
    })
  }

  return events
}
