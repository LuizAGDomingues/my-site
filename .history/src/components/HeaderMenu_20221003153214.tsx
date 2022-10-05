import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { List } from 'phosphor-react'

function HeaderMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        
          <List color="white" weight="fill" className='m-2 h-8 w-8' />
        </div>
      </DropdownMenu.Trigger>
    </DropdownMenu.Root>
  )
}

export default HeaderMenu