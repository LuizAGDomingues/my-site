import React from 'react'
import Image from 'next/image'

function Certifications() {
  return (
    <div className='mt-28 flex items-center justify-around'>
        <div className='grid' >
            <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={300} width={300} />
            <span>Certificado Desenvolvedor WEB</span>
        </div>
        <div className='grid' >
            <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={300} width={300} />
            <span>Certificado Desenvolvedor WEB</span>
        </div>
        <div className='grid' >
            <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={300} width={300} />
            <span>Certificado Desenvolvedor WEB</span>
        </div>
    </div>
  )
}

export default Certifications