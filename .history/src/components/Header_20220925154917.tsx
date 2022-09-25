import Link from 'next/link';
import { House } from "phosphor-react";

function Header() {
  return (
    <div className='bg-zinc-900 text-white w-full flex items-center'>
      <Link href={'/'}>
        <a className='flex items-center group'>
          <House size={25} color="white" weight="fill"/>
          <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all'>
            Inicio
          </span>
        </a>
      </Link>
    </div>
  )
}

export default Header