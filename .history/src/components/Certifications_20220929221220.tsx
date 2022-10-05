import React from 'react'
import Image from 'next/image'

function Certifications() {
  return (
    <div className='mt-28 flex items-center justify-around'>
        <div className='flex flex-col items-center' >
            <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={400} width={450} />
            <span>Certificado Desenvolvedor WEB</span>
        </div>
        <div className='flex flex-col items-center' >
            <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={400} width={450} />
            <span>Certificado Desenvolvedor WEB</span>
        </div>
        <div className='flex flex-col items-center' >
            <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={400} width={450} />
            <span>Certificado Desenvolvedor WEB</span>
        </div>
    </div>
  )
}

export default Certifications