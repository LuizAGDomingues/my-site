import React from 'react'
import Image from 'next/image'

interface TechIconsProps {
    iconURL: string;
    iconAlt: string;
    iconTitle: string;
}

function TechIcons({ iconURL, iconAlt, iconTitle }: TechIconsProps) {
  return (
    <div className='relative w-[200px] mt-16 cursor-pointer group anima'>
      <div className='group-hover:opacity-50 transition-all'>
        <Image src={iconURL}  alt={iconAlt} height={200} width={200} />
      </div>
      <span className='font-bold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover:visible group-hover:animate-fade'>{iconTitle}</span>
    </div>
  )
}

export default TechIcons