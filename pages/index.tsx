import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Form} from '../components'

const Home: NextPage = () => {
  return (
    <div className="f">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Form/>
    </div>
  )
}

export default Home
