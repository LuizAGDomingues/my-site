import Link from 'next/link';
import { House, User, Code, GraduationCap } from "phosphor-react";

function Header() {
  return (
    <div className='bg-zinc-900 text-white w-full flex items-center'>
      <Link href={'/'}>
        <a className='px-5 h-12 text-white flex items-center group'>
          <House color="white" weight="fill" className='h-6 w-6' />
          <span className='mt-2 max-w-0 overflow-hidden group-hover:max-w-xs group-focus:max-w-xs   transition-all duration-500 ease-linear'>
            Home
          </span>
        </a>
      </Link>
      <Link href={'/'}>
        <a className='px-5 h-12 text-white flex items-center group'>
          <User color="white" weight="fill" className='h-6 w-6' />
          <span className='mt-2'>
            Sobre mim
          </span>
        </a>
      </Link>
      <Link href={'/'}>
        <a className='px-5 h-12 text-white flex items-center group'>
          <Code color="white" weight="fill" className='mt-1 h-6 w-6' />
          <span className='mt-2'>
            Tecnologias
          </span>
        </a>
      </Link>
      <Link href={'/'}>
        <a className='px-5 h-12 text-white flex items-center group'>
          <Code color="white" weight="fill" className='mt-1 h-6 w-6' />
          <span className='mt-2'>
            Certificações
          </span>
        </a>
      </Link>
    </div>
  )
}

export default Header