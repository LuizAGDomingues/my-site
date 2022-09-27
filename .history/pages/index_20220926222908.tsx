import type { NextPage } from 'next'
import { useRef } from 'react'
import Image from 'next/image'
import Header from '../src/components/Header'
import photo from '../public/my-photo.png'

const Home: NextPage = () => {
  const about = useRef(null);

  return (
    <div className='bg-galaxy h-screen w-full fixed bg-cover bg-no-repeat'>
      <Header refs=''/>
      <div ref={about} className='flex items-center justify-center text-white'>
        <div className='w-[30rem] h-[51rem] block'>
          <Image src={photo} alt='foto pessoal' layout='responsive' />
        </div>
        <span className='font-medium text-xl w-1/2 ml-36'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis bibendum elit. Curabitur sed finibus purus, quis sagittis enim. Vestibulum mollis in lacus at egestas. Suspendisse quis ultricies mi. Etiam ultricies convallis volutpat. Proin vitae finibus augue. Etiam et cursus libero. Sed sit amet condimentum tellus. Ut dictum orci nec est elementum, tempus facilisis dolor laoreet. Fusce egestas, nibh vel porta dictum, leo lacus varius urna, eu laoreet velit eros sed dui. Vestibulum fringilla interdum risus, nec tempor ante dapibus ut. Maecenas ultricies nisi diam, sit amet aliquet ante commodo vel. Sed ac libero leo. Nunc fermentum nisl nulla, ac sodales augue vulputate eu. Nullam eget semper nibh, non pulvinar nunc. Nulla eget ullamcorper sem, quis mattis massa.</span>
      </div>
    </div>
  )
}

export default Home
