import React from 'react'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold mb-4'>Login Page</h1>
            <p className='text-lg'>This is the login page for SkillSync.</p>
            <p className='text-sm text-gray-500 mt-2'>Please enter your credentials to log in.</p>

            <form action="">
                <Button>Hi</Button>
            </form>
        </div>
    </div>
  )
}

export default page