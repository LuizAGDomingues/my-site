import type { NextPage } from 'next'
import Image from 'next/image'
import fundo from '../src/assets/fundo_full_hd.jpg'

const Home: NextPage = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <Image src={fundo} />
    </div>
  )
}

export default Home
