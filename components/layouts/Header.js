import Link from 'next/link'
import styles from '../../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>NextEvents</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/events'>
              <a>All Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
