import React from 'react'
import { House } from "phosphor-react";
import Link from 'next/link';

function Header() {
  return (
    <div className='bg-zinc-900 text-white w-full flex items-center'>
        <Link href={'/'}><a className='m-4 hover:border-2 hover:border-pu '><House size={25} color="white" weight="fill"/></a></Link>
    </div>
  )
}

export default Header