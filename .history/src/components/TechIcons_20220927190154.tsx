import React from 'react'
import Image from 'next/image'

interface TechIconsProps {
    iconURL: string;
    iconAlt: string;
    iconTitle: string;
}

function TechIcons({ iconURL, iconAlt, iconTitle }: TechIconsProps) {
  return (
    <div>
        <Image src={iconURL}  alt={iconAlt} height={500} width={500} />
        <span>{iconTitle}</span>
    </div>
  )
}

export default TechIcons