import React from 'react'
import { House } from "phosphor-react";
import Link from 'next/link';

function Header() {
  return (
    <div className='bg-zinc-900 text-white w-full h-12 flex items-center'>
        <button><House size={24}/></button>
    </div>
  )
}

export default Header