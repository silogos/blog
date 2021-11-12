import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Header from '../components/header'
import Articles from '../components/articles'
import Notes from '../components/notes'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <Articles allPostsData={allPostsData} />
      {/* <Notes allPostsData={allPostsData} /> */}
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
