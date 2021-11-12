import { memo } from 'react'
import Link from 'next/link'
import styles from './articles.module.css'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'

function Articles({ allPostsData }) {
  const MAX_POST_AT_HOME = 10;

  return (
    <articles className={`wrapper ${styles.container}`}>
      <h2 className={styles.title}>Articles</h2>
      <div className={styles.wrapper}>   
        <div className={styles.tagList}>
          { ['css', 'javascript', 'mysql', 'eloquent', 'sequalize'].map((tag) => (
            <Link key={`articles-tag-${tag}`}  href={`/tags/${tag}`}>
              <a className={styles.tagItem}>#{tag}</a>
            </Link>
          ))}
        </div>
        <div className={styles.articleList}>
          { allPostsData.slice(0, MAX_POST_AT_HOME).map(({ id, date, title, desc }) => (
            <div key={`articles-list-item-${id}`} className={styles.box}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <p>{desc}</p>
            </div>
          ))}
          { allPostsData.length > MAX_POST_AT_HOME && (
            <div className={`${styles.box} ${styles.boxMore}`}>
              <Link href={`/articles`}>
                <a>More</a>
              </Link>
            </div>
          ) }
        </div>
      </div>
    </articles>
  )
}


export default memo(Articles);