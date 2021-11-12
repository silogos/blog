import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './topnav.module.css'
import utilStyles from '../../styles/utils.module.css'

function TopNav(props) {
  return (
    <nav className={`wrapper ${styles.container}`}>
      <Link href={`/`}>
        <div className={styles.wtgLogo}>
          <div className={`${styles.wtgLogoImage}  ${utilStyles.borderCircle}`} >
            <Image
              priority
              src="/images/profile.jpg"
              height={50}
              width={50}
              // alt={name}
            />
          </div>
          <span className={styles.wtgLogoTitle}>Ways to Geek</span>
        </div>
      </Link>
      <div className={styles.menu} >
        <Link href={`/articles`}>
          <a className={styles.menuItem}>Articles</a>
        </Link>
        <Link href={`/notes`}>
          <a className={styles.menuItem}>Notes</a>
        </Link>
        <Link href={`/about`}>
          <a className={styles.menuItem}>About</a>
        </Link>
        <Link href={`/posts`}>
          <a className={styles.menuItem}>Ebook</a>
        </Link>
      </div>
    </nav>
  )
}


export default memo(TopNav);