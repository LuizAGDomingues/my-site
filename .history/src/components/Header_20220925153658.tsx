import React from 'react'
import { House } from "phosphor-react";
import Link from 'next/link';

function Header() {
  return (
    <div className='bg-zinc-900 text-white w-full rounded flex items-center'>
        <Link href={'/'}><a className='m-4 '><House size={25}/></a></Link>
    </div>
  )
}

export default Header