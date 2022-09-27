import React from 'react'
import Image from 'next/image'

interface TechIconsProps {
    iconURL: string;
    iconAlt: string;
    iconTitle: string;
}

function TechIcons({ iconURL, iconAlt, iconTitle }: TechIconsProps) {
  return (
    <div className='relative border w-[400px]'>
        <Image src={iconURL}  alt={iconAlt} height={400} width={400} />
        <span className='absolute top-1/2'>{iconTitle}</span>
    </div>
  )
}

export default TechIcons