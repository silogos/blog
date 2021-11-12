import { memo } from 'react'
import styles from './workExperience.module.css'

const workExperiences = [
  {
    id: 1,
    workPeriod: 'Sep 2016 - Jul 2019',
    name: 'PT. Aegis Ultima Teknologi (Aegislabs)',
    contract: 'Full-Time Employees',
    role: 'Junior Programmer',
    jobDesc: [
      'BackEnd Developer',
      'FrontEnd Developer',
      'Testing',
      'Maintenance',
      'User Interface Design',
      'Preparation of Technical Documentation and User Guides',
      'Training and Customer Support',
    ],
    projets: [
      'Website Pendidikan SECAPA AD (Website CodeIgniter)',
      'Inventory Management Apps (React Native)',
      'Quran Kareem (React Native)',
      'Islamic Mind (React Native)',
      'Mindtrex (React Native)',
      'My Samator (React Native)',
    ],
  },
  {
    id: 2,
    workPeriod: 'Jul 2019 - Oct 2019',
    name: 'PT. Nevsky Prospekt Indonesia',
    contract: 'Freelancer',
    role: 'Tech Lead',
    jobDesc: ['Development Application', 'Testing', 'Maintenance'],
    projets: ['Bonian e-Commerce (React Native)'],
  },
  {
    id: 3,
    workPeriod: 'Aug 2019 - Jun 2019',
    name: 'PT Asuransi Jiwa Generali Indonesia',
    contract: 'Full-Time Employees',
    role: 'React Native Consultant',
    jobDesc: [
      'Development Application',
      'Testing',
      'Maintenance',
      'User Interface Design',
      'Preparation of Technical Documentation and User Guides',
    ],
    projets: ['iRectuit (React Native)', 'mConnect (React Native)', 'Gen-iClick (React Native)'],
  },
  {
    id: 4,
    workPeriod: 'Jun 2019 - Now',
    name: 'PT Lemonilo Indonesia Sehat',
    contract: 'Full-Time Employees',
    role: 'Software Engineer',
    jobDesc: [
      'BackEnd Developer',
      'FrontEnd Developer',
    ],
    projets: [],
  },
];

function WorkExperience(props) {
  return (
    <section className={`wrapper ${styles.container}`}>
      <h2 className={styles.title}>Work Experiences</h2>
      <div className={styles.wrapper}>   
        { workExperiences.map((workExperience) => (
          <div key={`workExperience-${workExperience.id}`} className={styles.box}>
            <span className={styles.period}>{`${workExperience.workPeriod} (${workExperience.contract})`}</span>
            <span className={styles.name}>{workExperience.name}
              <span className={styles.as}>{` as ${workExperience.role}`}</span>
            </span>
            <span className={styles.role}>Roles: {workExperience.jobDesc.length > 0 ? workExperience.jobDesc.join(', ') : '*Coming soon'}</span>
          </div>
        ))}    
      </div>
    </section>
  )
}


export default memo(WorkExperience);