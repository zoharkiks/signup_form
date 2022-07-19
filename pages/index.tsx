import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Form} from '../components'

const Home: NextPage = () => {
  return (
    
    <div className="bg-gray-bg h-screen">
      <Head>
        <title>Sign up Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Form/>
    </div>
  )
}

export default Home
