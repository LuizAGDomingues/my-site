import type { NextPage } from 'next'
import Header from '../src/components/Header'

const Home: NextPage = () => {
  return (
    <div className='bg-galaxy h-screen w-full fixed bg-cover bg-no-repeat opacity-80'>
      <Header />
    </div>
  )
}

export default Home
