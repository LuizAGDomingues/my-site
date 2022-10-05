import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { List } from 'phosphor-react'

function HeaderMenu() {
  return (
    <div className={`h-12 bg-zinc-900 text-white fixed `}>
      <List color="white" weight="fill" className='m-2 h-8 w-8' />
    </div>
  )
}

export default HeaderMenu