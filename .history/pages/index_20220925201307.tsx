import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../src/components/Header'
import photo from '../public/my_photo.png'

const Home: NextPage = () => {
  return (
    <div className='bg-galaxy h-screen w-full fixed bg-cover bg-no-repeat'>
      <Header />
      <div className='flex items-center'>
        <Image src={photo} alt='foto pessoal' className='w-40 h-40'/>
        <span>fhasifasufasuh fhsfhiashfuiashufhuais isahfiuashfiashfiuash fuiahs uasfasfasf</span>
      </div>
    </div>
  )
}

export default Home
