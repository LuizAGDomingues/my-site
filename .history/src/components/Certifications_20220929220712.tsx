import React from 'react'
import Image from 'next/image'

function Certifications() {
  return (
    <div className='mt-28 grid grid-cols-3'>
        <div>
        <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={300} width={300} />
        <span>Certificado Desenvolvedor WEB</span>
        
        <div>
        <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={300} width={300} />
        <span>Certificado Desenvolvedor WEB</span>
        
        <div>
        <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={300} width={300} />
        <span>Certificado Desenvolvedor WEB</span>
        
    </div>
  )
}

export default Certifications