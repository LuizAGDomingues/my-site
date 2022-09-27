import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../src/components/Header'

const Home: NextPage = () => {
  return (
    <div className='bg-galaxy h-screen w-full fixed bg-cover bg-no-repeat'>
      <Header />
      <div>
        <Image
      </div>
    </div>
  )
}

export default Home
