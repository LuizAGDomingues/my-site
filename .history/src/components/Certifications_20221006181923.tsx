import React from 'react'
import Image from 'next/image'

function Certifications() {
  return (
    <div className='flex items-center justify-around'>
        <div className='flex flex-col items-center ' >
            <Image src='/Certificado Ingles.jpg' alt='Certificado Desenvolvedor WEB' height={400} width={500} />
            <span>EF SET English Certificate 70/100 (C1 Advanced)</span>
            <a href="https://www.efset.org/cert/XgocKC" target="_blank" rel="noopener noreferrer">Consultar em: https://www.efset.org/cert/XgocKC</a>
        </div>
        <div className='flex flex-col items-center' >
            <Image src='/Certificado Design.jpg' alt='Certificado Desenvolvedor WEB' height={400} width={500} />
            <span>Certificado Design Gráfico</span>
            <span>Certificado tirado em 2014 focado em criatividade e softwares</span>
        </div>
        <div className='flex flex-col items-center' >
            <Image src='/Certificado Desenvolvedor WEB.jpg' alt='Certificado Desenvolvedor WEB' height={400} width={500} />
            <span>Certificado Desenvolvedor WEB</span>
            <a href="https://www.udemy.com/certificate/UC-L18WQSQU/" target="_blank" rel="noopener noreferrer">Consultar em: ude.my/UC-L18WQSQU</a>
        </div>
    </div>
  )
}

export default Certifications