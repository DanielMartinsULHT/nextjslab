import React from 'react'
import Link from 'next/link'


export default function Header() {
 return (
    <header className='p-10px bg-transparent font-bold'>
        <h1>React & Next.js</h1>
        <nav className=''>
            <Link href='/'>Home </Link>
            <Link href='/produtos'>Produtos </Link>
            <Link href='/tecnologias'>Tecnologias</Link>

        </nav>
    </header>
  )
}
