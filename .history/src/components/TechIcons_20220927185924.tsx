import React from 'react'
import Image from 'next/image'

interface TechIconsProps {
    iconURL: string;
    iconAlt: string;
    iconTitle: string;
}

function TechIcons({ iconURL, iconTitle }: TechIconsProps) {
  return (
    <div>
        <Image src={iconURL}  />
    </div>
  )
}

export default TechIcons