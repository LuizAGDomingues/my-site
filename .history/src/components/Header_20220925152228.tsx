import React from 'react'
import { House } from "phosphor-react";
import Link from 'next/link';

function Header() {
  return (
    <div className='bg-zinc-900 text-white w-full h-12 flex items-center m-'>
        <Link href={'/'}><House /></Link>
    </div>
  )
}

export default Header