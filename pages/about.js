import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Header from '../components/header'
import WorkExperience from '../components/workExperience'
import Education from '../components/education'

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <Education />
      <WorkExperience />
    </Layout>
  )
}