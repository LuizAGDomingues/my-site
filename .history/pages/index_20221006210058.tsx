import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Header from '../src/components/Header'
import TechIcons from '../src/components/TechIcons'
import photo from '../public/my-photo.png'
import Certifications from '../src/components/Certifications'
import HeaderMenu from '../src/components/HeaderMenu'

const Home: NextPage = () => {
  const [renderHeaderMenu, setRenderHeaderMenu] = useState('hidden');
  const [renderTech, setRenderTech] = useState(false);
  const [renderCertifications, setRenderCertifications] = useState(false);

  useEffect(() => {
    function scrollPosition(){
      if(window.scrollY < 30){
        setRenderHeaderMenu('hidden');
      }
      if(window.scrollY > 50){
        setRenderHeaderMenu('');
      }
      if(window.scrollY > 500){
        setRenderTech(true);
      }
      if(window.scrollY > 1000){
        setRenderCertifications(true);
      }
    }
    window.addEventListener('scroll', scrollPosition);
  }, [])

  return (
    <>
      <Head>
        <title>Luiz portfolio - HOME</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='bg-galaxy w-full bg-cover bg-no-repeat text-white'>
        <Header refs={['about', 'tech', 'certifications', 'projects']} />
        <div className={`${renderHeaderMenu}`}>
          <HeaderMenu refs={['about', 'tech', 'certifications', 'projects']} />
        </div>
        <div id='about' className='flex items-center justify-center gap-48'>
          <div className='w-[30rem] h-[51rem] block mt-10'>
            <Image src={photo} alt='foto pessoal' layout='responsive' />
          </div>
          <span className='font-medium text-xl w-1/3 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis bibendum elit. Curabitur sed finibus purus, quis sagittis enim. Vestibulum mollis in lacus at egestas. Suspendisse quis ultricies mi. Etiam ultricies convallis volutpat. Proin vitae finibus augue. Etiam et cursus libero. Sed sit amet condimentum tellus. Ut dictum orci nec est elementum, tempus facilisis dolor laoreet. Fusce egestas, nibh vel porta dictum, leo lacus varius urna, eu laoreet velit eros sed dui. Vestibulum fringilla interdum risus, nec tempor ante dapibus ut. Maecenas ultricies nisi diam, sit amet aliquet ante commodo vel. Sed ac libero leo. Nunc fermentum nisl nulla, ac sodales augue vulputate eu. Nullam eget semper nibh, non pulvinar nunc. Nulla eget ullamcorper sem, quis mattis massa.</span>
        </div>
        <div id='tech'>
          { renderTech ?
            <div className='ml-[20rem] mt-20 grid grid-cols-3 overflow-hidden'>
              <div className='animate-move-right' style={{animationFillMode: 'backwards'}}>
                <TechIcons iconURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' iconAlt='HTML5 icon' iconTitle='HTML5' />
              </div>
              <div className='animate-move-top' style={{animationFillMode: 'backwards'}}>
                <TechIcons iconURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' iconAlt='CSS3 icon' iconTitle='CSS3' />
              </div>
              <div className='animate-move-left' style={{animationFillMode: 'backwards'}}>
                <TechIcons iconURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' iconAlt='Javascript icon' iconTitle='Javascript' />
              </div>
              <div className='animate-move-right' style={{animationFillMode: 'backwards', animationDelay: '.3s'}}>
                <TechIcons iconURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' iconAlt='Typescript icon' iconTitle='Typescript' />
              </div>
              <div className='animate-fade' style={{animationFillMode: 'backwards', animationDelay: '.85s'}}>
                <TechIcons iconURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' iconAlt='Node icon' iconTitle='NodeJS' />
              </div>
              <div className='animate-move-left' style={{animationFillMode: 'backwards', animationDelay: '.3s'}}>
                <TechIcons iconURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' iconAlt='React icon' iconTitle='ReactJS' />
              </div>
              <div className='animate-move-right' style={{animationFillMode: 'backwards', animationDelay: '.5s'}}>
                <TechIcons iconURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' iconAlt='MySQL icon' iconTitle='MySQL' />
              </div>
              <div className='animate-move-bot' style={{animationFillMode: 'backwards'}}>
                <TechIcons iconURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' iconAlt='Tailwindcss icon' iconTitle='Tailwindscss' />
              </div>
              <div className='animate-move-left' style={{animationFillMode: 'backwards', animationDelay: '.5s'}}>
                <TechIcons iconURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' iconAlt='Docker icon' iconTitle='Docker' />
              </div>
            </div>
            : <span className='h-[56rem] flex items-end text-2xl'>Loading</span>
          }
        </div>
        <div id='certifications'>
          { renderCertifications ? 
            <div className='mt-32'>
              <Certifications />
            </div>
            : <span className='h-96 flex items-end text-2xl'>Loading</span>
          }
        </div>
        <div id='projects' className='mt-32'>
          Projetos
        </div>
      </div>
    </>
  )
}

export default Home
