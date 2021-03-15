import { useContext } from 'react'
import NotificationContext from '../../store/NotificationContext'
import Notification from '../ui/Notification'
import Header from './Header'

const Layout = ({ children }) => {
  const context = useContext(NotificationContext)
  const activeNotification = context.notification
  return (
    <>
      <Header />
      <main>{children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  )
}

export default Layout
