import React from 'react'
import Image from 'next/image'

function Certifications() {
  return (
    <div className='mt-28 flex'>
        <div className='' >
            <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={300} width={300} />
            <span>Certificado Desenvolvedor WEB</span>
        </div>
        <div className='' >
            <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={300} width={300} />
            <span>Certificado Desenvolvedor WEB</span>
        </div>
        <div className='' >
            <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={300} width={300} />
            <span>Certificado Desenvolvedor WEB</span>
        </div>
    </div>
  )
}

export default Certifications