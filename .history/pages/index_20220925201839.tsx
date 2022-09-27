import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../src/components/Header'
import photo from '../public/my_photo.png'

const Home: NextPage = () => {
  return (
    <div className='bg-galaxy h-screen w-full fixed bg-cover bg-no-repeat'>
      <Header />
      <div className='w-full h-screen flex items-center justify-center text-white gap-96'>
        <div className='h-[600px] w-[600px] border-2>
          <Image src={photo} alt='foto pessoal' />
        </div>
        <span>fhasifasufasuh fhsfhiashfuiashufhuais isahfiuashfiashfiuash fuiahs uasfasfasf</span>
      </div>
    </div>
  )
}

export default Home
