import React from 'react'
import Image from 'next/image'

interface TechIconsProps {
    iconURL: string;
    iconAlt: string;
    iconTitle: string;
}

function TechIcons({ iconURL, iconAlt, iconTitle }: TechIconsProps) {
  return (
    <div className='relative border w-[400px] cursor-pointer group'>
        <Image src={iconURL}  alt={iconAlt} height={400} width={400} />
        <span className='font-bold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inv '>{iconTitle}</span>
    </div>
  )
}

export default TechIcons