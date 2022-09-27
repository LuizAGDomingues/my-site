import React from 'react'
import Image from 'next/image'

interface TechIconsProps {
    iconURL: string;
    iconAlt: string;
    iconTitle: string;
}

function TechIcons({ iconURL, iconAlt, iconTitle }: TechIconsProps) {
  return (
    <div className='relative border h- w-[400px]'>
        <Image src={iconURL}  alt={iconAlt} height={400} width={400} />
        <span className='absolute left-1/2 top-1/2'>{iconTitle}</span>
    </div>
  )
}

export default TechIcons