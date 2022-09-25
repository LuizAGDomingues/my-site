import Link from 'next/link';
import { House } from "phosphor-react";

function Header() {
  return (
    <div className='bg-zinc-900 text-white w-full flex items-center'>
      <Link href={'/'}>
        <a className='m-4 w-10 flex items-center overflow-hidden'>
          <House size={25} color="white" weight="fill"/>
          Página inicial
        </a>
      </Link>
    </div>
  )
}

export default Header