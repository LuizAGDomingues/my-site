import React from 'react'
import { House } from "phosphor-react";
import Link from 'next/link';

function Header() {
  return (
    <div className='bg-zinc-900 text-white w-full h-10 flex items-center'>
        <Link href={'/'}><a className='mx-4 bg-pink-500 overflow-hidden'><House size={25}/></a></Link>
    </div>
  )
}

export default Header