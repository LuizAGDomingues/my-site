import Link from 'next/link';
import { House } from "phosphor-react";

function Header() {
  return (
    <div className='bg-zinc-900 text-white w-full flex items-center'>
      <Link href={'/'}>
        <a className='m-4 hover:w-24'>
          <House size={25} color="white" weight="fill"/>
        </a>
      </Link>
    </div>
  )
}

export default Header