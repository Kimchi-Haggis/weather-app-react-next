import type { NextPage } from 'next'

import Weather from '@components/weather';
import Head from 'next/head';

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Weather App | ChangYeol Lee</title>
      </Head>
      <Weather />
    </div>
  )
}

export default Home
