import React from 'react'
import { List } from 'phosphor-react'

function HeaderMenu() {
  return (
    <div className='h-12 bg-zinc-900 text-white fixed'>
      <List color="white" weight="fill" className='h-6 w-6' />
    </div>
  )
}

export default HeaderMenu