import Link from 'next/link';
import { House, User, Code, GraduationCap, Browsers, WhatsappLogo, AppWindow, ArrowRight } from "phosphor-react";

interface HeaderProps{
  refs: string[];
}

function Header({refs}: Head) {
  return (
    <div className='bg-zinc-900 text-white w-full h-12 flex items-center justify-between'>
      <Link href={'/'}>
        <a className='px-10 h-12 text-white flex items-center group'>
          <House color="white" weight="fill" className='h-6 w-6' />
          <span className='mt-2 max-w-0 whitespace-nowrap overflow-hidden group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear'>
            Home
          </span>
        </a>
      </Link>
      <div className='flex items-center'>
        <Link href={'/'}>
          <a className='px-5 h-12 text-white flex items-center group'>
            <User color="white" className='h-6 w-6' />
            <span className='mt-2 max-w-0 whitespace-nowrap overflow-hidden group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear'>
              Sobre mim
            </span>
          </a>
        </Link>
        <Link href={'/'}>
          <a className='px-5 h-12 text-white flex items-center group'>
            <Code color="white" className='mt-1 h-6 w-6' />
            <span className='mt-2 max-w-0 whitespace-nowrap overflow-hidden group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear'>
              Tecnologias
            </span>
          </a>
        </Link>
        <Link href={'/'}>
          <a className='px-5 h-12 text-white flex items-center group'>
            <GraduationCap color="white" className='mt-1 h-6 w-6' />
            <span className='mt-2 max-w-0 whitespace-nowrap overflow-hidden group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear'>
              Certificações
            </span>
          </a>
        </Link>
        <Link href={'/'}>
          <a className='px-5 h-12 text-white flex items-center group'>
            <Browsers color="white" className='mt-1 h-6 w-6' />
            <span className='mt-2 max-w-0 whitespace-nowrap overflow-hidden group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear'>
              Projetos
            </span>
          </a>
        </Link>
        <Link href={'/'}>
          <a className='px-5 h-12 text-white flex items-center group'>
            <WhatsappLogo color="white" className='mt-1 h-6 w-6' />
            <span className='mt-2 max-w-0 whitespace-nowrap overflow-hidden group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear'>
              Contato
            </span>
          </a>
        </Link>
        <Link href={'/'}>
          <a className='px-5 h-12 text-white flex items-center group'>
            <AppWindow color="white" className='mt-1 h-6 w-6' />
            <span className='mt-2 max-w-0 whitespace-nowrap overflow-hidden group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear'>
              Página de aplicações
            </span>
            <ArrowRight color="white" className='mt-2 ml-2 mr-10 h-6 w-6 animate-pulse group-hover:animate-ping group-focus:animate-ping' />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Header