import { memo } from 'react'
import Link from 'next/link'
import styles from './articles.module.css'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'

function Articles({ allPostsData }) {
  return (
    <articles className={`wrapper ${styles.container}`}>
      <h2 className={styles.title}>Articles</h2>
      <div className={styles.wrapper}>   
        { allPostsData.map(({ id, date, title }) => (
          <div key={`articles-list-item-${id}`} className={styles.box}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </div>
        ))}
        <div className={`${styles.box} ${styles.boxMore}`}>
          <Link href={`/articles`}>
            <a>More</a>
          </Link>
        </div>
      </div>
    </articles>
  )
}


export default memo(Articles);