import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { List, House, User, Code, GraduationCap, Browsers, WhatsappLogo, AppWindow, ArrowRight } from "phosphor-react";

function HeaderMenu() {
  return (
    <div className='h-12 bg-zinc-900 text-white rounded-md fixed'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <List color="white" weight="fill" className='m-2 h-8 w-8 hover:opacity-70 transition-all' />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className='bg-zinc-900 w-24 h-48 rounded-md text-center'>
          <DropdownMenu.Item className='flex items-center justify-center gap-1 cursor-pointer'>
            <Link href='/'>
              <>
              <House color="white" weight="fill"/>
              <span className='mt-[0.2rem]'>Home</span>
              </>
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default HeaderMenu