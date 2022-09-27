import Link from 'next/link';
import * as Icons from 'phosphor-react';
import { House, User, Code, GraduationCap, Browsers, WhatsappLogo, AppWindow, ArrowRight } from "phosphor-react";

function Header() {
  return (
    <div className='bg-zinc-900 text-white w-full max-h-screen flex items-center justify-end'>
      <Icons
      <Link href={'/'}>
        <a className='px-5 h-12 text-white flex items-center group mr-[45rem]'>
          <House color="white" weight="fill" className='h-6 w-6' />
          <span className='mt-2 max-w-0 overflow-hidden group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear'>
            Home
          </span>
        </a>
      </Link>
      <Link href={'/'}>
        <a className='px-5 h-12 text-white flex items-center group'>
          <User color="white" className='h-6 w-6' />
          <span className='mt-2'>
            Sobre mim
          </span>
        </a>
      </Link>
      <Link href={'/'}>
        <a className='px-5 h-12 text-white flex items-center group'>
          <Code color="white" className='mt-1 h-6 w-6' />
          <span className='mt-2'>
            Tecnologias
          </span>
        </a>
      </Link>
      <Link href={'/'}>
        <a className='px-5 h-12 text-white flex items-center group'>
          <GraduationCap color="white" className='mt-1 h-6 w-6' />
          <span className='mt-2'>
            Certificações
          </span>
        </a>
      </Link>
      <Link href={'/'}>
        <a className='px-5 h-12 text-white flex items-center group'>
          <Browsers color="white" className='mt-1 h-6 w-6' />
          <span className='mt-2'>
            Projetos
          </span>
        </a>
      </Link>
      <Link href={'/'}>
        <a className='px-5 h-12 text-white flex items-center group'>
          <WhatsappLogo color="white" className='mt-1 h-6 w-6' />
          <span className='mt-2'>
            Contato
          </span>
        </a>
      </Link>
      <Link href={'/'}>
        <a className='px-5 h-12 text-white flex items-center group'>
          <AppWindow color="white" className='mt-1 h-6 w-6' />
          <span className='mt-2'>
            Página de aplicações
          </span>
          <ArrowRight color="white" className='mt-2 ml-2 mr-5 h-6 w-6 animate-pulse group-hover:animate-ping group-focus:animate-ping' />
        </a>
      </Link>
    </div>
  )
}

export default Header