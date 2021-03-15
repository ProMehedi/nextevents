import { createContext, useEffect, useState } from 'react'

const NotificationContext = createContext({
  notification: null,
  showNotification: function (notification) {},
  hideNotification: function () {},
})

export const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState()

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null)
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [activeNotification])

  const showNotificationHandler = (notification) => {
    setActiveNotification(notification)
  }
  const hideNotificationHandler = () => {
    setActiveNotification(null)
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  }

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
