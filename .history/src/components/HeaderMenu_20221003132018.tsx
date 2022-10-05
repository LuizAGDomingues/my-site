import React from 'react'
import { List } from 'phosphor-react'

function HeaderMenu() {
  return (
    <div className='h-12 bg-zinc-900 text-white fixed'>
      <List color="white" weight="fill" className='m- h-10 w-10' />
    </div>
  )
}

export default HeaderMenu