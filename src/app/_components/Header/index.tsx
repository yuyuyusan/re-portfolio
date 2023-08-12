import Navigation from '@/app/_components/Navigation'
import styles from './index.module.scss'
export default function Header () {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  )
}