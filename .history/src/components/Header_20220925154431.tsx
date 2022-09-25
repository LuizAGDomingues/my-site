import Link from 'next/link';
import { House } from "phosphor-react";

function Header() {
  return (
    <div className='bg-zinc-900 text-white w-full flex items-center'>
      <Link href={'/'}>
        <a className='m-4 flex items-center justify-center overflow-hidden hover:w-24'>
          <House size={25} color="white" weight="fill"/>
          Página inicial
        </a>
      </Link>
    </div>
  )
}

export default Header