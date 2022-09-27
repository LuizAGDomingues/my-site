import React from 'react'
import Image from 'next/image'

interface TechIconsProps {
    iconURL: string;
    iconAlt: string;
    iconTitle: string;
}

function TechIcons({ iconURL, iconAlt, iconTitle }: TechIconsProps) {
  return (
    <div className='relative cursor-pointer group'>
        <div className='group-hover:opacity-70 transition-all'>
            <Image src={iconURL}  alt={iconAlt} height={400} width={400} />
        </div>
        <span className='font-bold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover:visible group-hover:animate-fade'>{iconTitle}</span>
    </div>
  )
}

export default TechIcons