import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { List, House, User, Code, GraduationCap, Browsers, WhatsappLogo, AppWindow } from "phosphor-react";
import { HeaderProps } from './Header'

function HeaderMenu({refs}: HeaderProps) {
  return (
    <div className='h-12 bg-zinc-900 text-white rounded-md fixed'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <List color="white" weight="fill" className='m-2 h-8 w-8 hover:opacity-70' />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className='bg-zinc-900 w-40 h-48 rounded-md'>
          <DropdownMenu.Item >
            <Link href='/'>
              <a className='flex items-center ml-3 gap-1 cursor-pointer'>
                <House color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Home</span>
              </a>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item >
            <Link href={`/#${refs[0]}`} scroll={false} >
              <a>
                <User color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Sobre mim</span>
              </a>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item >
            <Link href={`/#${refs[1]}`} scroll={false} >
              <a>
                <Code color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Tecnologias</span>
              </a>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item >
            <Link href={`/#${refs[2]}`} scroll={false} >
              <a>
                <GraduationCap color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Certificações</span>
              </a>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item >
            <Link href={`/#${refs[3]}`} scroll={false} >
              <a>
                <Browsers color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Projetos</span>
              </a>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item >
            <Link href='/'>
              <a>
                <WhatsappLogo color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Contato</span>
              </a>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item >
            <Link href='/'>
              <a>
                <AppWindow color="white" weight="fill"/>
                <span className='mt-[0.2rem]'>Outros projetos</span>
              </a>
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default HeaderMenu