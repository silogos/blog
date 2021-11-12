import { memo } from 'react'
import styles from './education.module.css'

const educations = [
  {
    id: 1,
    name: 'Vocational High School 2 Bandung',
    period: '2013 - 2016',
    role: 'Software Engineering'
  },
  {
    id: 2,
    name: 'Sekolah Tinggi Teknologi Bandung (STTB)',
    period: '2017 - 2019',
    role: 'Informatics Engineering'
  },
];

function Education(props) {
  return (
    <section className={`wrapper ${styles.container}`}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.wrapper}>   
        { educations.map((education) => (
          <div key={`education-list-item-${education.id}`} className={styles.box}>
            <span className={styles.period}>{education.period}</span>
            <span className={styles.name}>{education.name}</span>
            <span className={styles.as}>{education.role}</span>
          </div>
        ))}    
      </div>
    </section>
  )
}


export default memo(Education);