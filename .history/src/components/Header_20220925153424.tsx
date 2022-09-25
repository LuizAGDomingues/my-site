import React from 'react'
import { House } from "phosphor-react";
import Link from 'next/link';

function Header() {
  return (
    <div className='bg-zinc-900 text-white w-full max-h-10 flex items-center'>
        <Link href={'/'}><a className='mx-5'><House size={24}/></a></Link>
    </div>
  )
}

export default Header