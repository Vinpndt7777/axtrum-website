import dynamic from 'next/dynamic'
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/common/layout';
const HeroBanner = dynamic(() => import('../components/home/hero.banner'))
export default function Home() {
  return (
    <>
    <Layout home>
      <Head>
        <title>Axtrum | Better Business Solutions</title>
      </Head>
      <HeroBanner></HeroBanner>
    </Layout>
    </>
  )
}