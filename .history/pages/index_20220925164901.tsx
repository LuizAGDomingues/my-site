import type { NextPage } from 'next'
import Header from '../src/components/Header'

const Home: NextPage = () => {
  return (
    <div className='bg-galaxy h-screen w-full fixed bg-cover no-r'>
      <Header />
    </div>
  )
}

export default Home
