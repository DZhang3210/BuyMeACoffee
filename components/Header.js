'use client'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { User } from 'lucide-react'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({session}) => {
  const firstName = session?.user?.name.split(' ')[0]
  // const username = session?.user?.email
  // .replace(/[^a-z]/g,'');
  return (
    <header className="">
          <div className="flex justify-between items-center max-w-3xl mx-auto px-4 py-4 mb-16"> 
            <Link href = {'/'} className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faMugHot} className="h-8"/>
              <span className="mt-2 font-bold">
                Buy me a coffee
              </span>
            </Link>
            <nav className="mt-2 flex gap-6 items-center">
              <Link href = "/about">About</Link>
              <Link href = "/about">FAQ </Link>
              <Link href = "/about">Contact</Link>
              <div className="flex gap-4">
                {!session ? (
                  <>
                  <button 
                    onClick = {() => signIn('google')}
                    className="border-2 border-gray-300 rounded-full p-2 px-4"
                  >
                    Login
                  </button>
                  <button 
                  //   onClick = {() => logIn('google')}
                    className="bg-yellow-300 rounded-full p-2 px-4">
                    Signup
                  </button>
                  </>
                ):(
                  <div className='flex items-center rounded-full bg-gray-300'>
                  <Link
                    href = {"/profile"} 
                    className='p-1 flex gap-1 items-center'
                  >
                    <Image 
                      src = {session?.user?.image} alt = "avatar" height = {35} width = {35}
                      className='rounded-full'  
                    />
                    {firstName}
                  </Link>
                  <button 
                    onClick = {() => signOut()}
                    className="border-2 bg-yellow-300 rounded-full p-2 px-4"
                  >
                    Logout
                  </button>
                  </div>
                )
                
                }
                
              </div>
              
            </nav>
          </div>
        </header>
  )
}

export default Header
