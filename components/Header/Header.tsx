import React from 'react'
import Link from 'next/link'


export default function Header() {
 return (
    <header className=' text-gray-950 font-bold text-center p-4 mx-auto w-full max-w-screen-lg'>
        <h1>React & Next.js</h1>
        <nav className=''>
            <Link href='/'>Home </Link>
            <Link href='/produtos'>Produtos </Link>
            <Link href='/tecnologias'>Tecnologias </Link>
            <Link href='/municipalities'>Municipalities</Link>

        </nav>
    </header>
  )
}
