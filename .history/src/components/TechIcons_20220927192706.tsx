import React from 'react'
import Image from 'next/image'

interface TechIconsProps {
    iconURL: string;
    iconAlt: string;
    iconTitle: string;
}

function TechIcons({ iconURL, iconAlt, iconTitle }: TechIconsProps) {
  return (
    <div className='cursor-pointer'>
        <div className=''>
            <Image src={iconURL}  alt={iconAlt} height={400} width={400} />
        </div>
        <span>{iconTitle}</span>
    </div>
  )
}

export default TechIcons