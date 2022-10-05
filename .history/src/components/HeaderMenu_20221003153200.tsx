import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { List } from 'phosphor-react'

function HeaderMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className='h-12 bg-zinc-900 text-white fixed'>
          <List color="white" weight="fill" className='h-8 w-8' />
        </div>
      </DropdownMenu.Trigger>
    </DropdownMenu.Root>
  )
}

export default HeaderMenu