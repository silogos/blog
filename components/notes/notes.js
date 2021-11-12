import { memo } from 'react'
import Link from 'next/link'
import styles from './notes.module.css'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'

function Notes({ allPostsData }) {
  return (
    <section className={`wrapper ${styles.container}`} >
      <h2 className={styles.title}>Notes</h2>
      <div className={styles.wrapper}>   
        { allPostsData.map(({ id, date, title }) => (
          <div key={`articles-list-item-${id}`} className={styles.box}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            {/* <div>
              <hr className={styles.line} />
            </div> */}
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </div>
        ))}
        <div className={`${styles.box} ${styles.boxMore}`}>
          <Link href={`/notes`}>
            <a>More</a>
          </Link>
        </div>
      </div>
    </section>
  )
}


export default memo(Notes);