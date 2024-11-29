import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignIn } from '@clerk/nextjs'

const Logo = '/icons/logo.png'

const Signup = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='mx-auto flex max-w-screen-md flex-col items-center justify-center p-4 text-center'>
        <Link href='/'>
          <div className='flex items-center space-x-2'>
            <Image src={Logo} alt='logo' width={100} height={200} className='h-12 w-12 rounded-full bg-blue-400 p-1' />
            <div className='text-xl font-semibold text-blue-500'>
              <span className='text-sky-900'>EHA-Focus</span>
            </div>
          </div>
        </Link>

        <div className='mt-8 w-full'>
          <span className='w-full p-4 py-12 text-center text-xl font-semibold text-white'>Welcome Back,</span>
        </div>

        <div className='mt-6 w-full'>
          <SignIn />
        </div>
      </div>
    </div>
  )
}

export default Signup
