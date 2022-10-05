import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { List, House, User, Code, GraduationCap, Browsers, WhatsappLogo, AppWindow } from "phosphor-react";
import { HeaderProps } from ''

function HeaderMenu() {
  return (
    <div className='h-12 bg-zinc-900 text-white rounded-md fixed'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <List color="white" weight="fill" className='m-2 h-8 w-8 hover:opacity-70' />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className='bg-zinc-900 w-40 h-48 rounded-md'>
          <DropdownMenu.Item className='flex items-center ml-3 gap-1 cursor-pointer'>
            <Link href='/'>
              <>
                <House color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Home</span>
              </>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='flex items-center ml-3 gap-1 cursor-pointer'>
            <Link href='/'>
              <>
                <User color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Sobre mim</span>
              </>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='flex items-center ml-3 gap-1 cursor-pointer'>
            <Link href='/'>
              <>
                <Code color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Tecnologias</span>
              </>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='flex items-center ml-3 gap-1 cursor-pointer'>
            <Link href='/'>
              <>
                <GraduationCap color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Certificações</span>
              </>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='flex items-center ml-3 gap-1 cursor-pointer'>
            <Link href='/'>
              <>
                <Browsers color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Projetos</span>
              </>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='flex items-center ml-3 gap-1 cursor-pointer'>
            <Link href='/'>
              <>
                <WhatsappLogo color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Contato</span>
              </>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='flex items-center ml-3 gap-1 cursor-pointer'>
            <Link href='/'>
              <>
                <AppWindow color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Outros projetos</span>
              </>
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default HeaderMenu