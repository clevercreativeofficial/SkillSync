'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

const LoginPage = () => {
    return (
        <div className='min-h-screen w-full flex justify-center items-center bg-gray-50'>
            <div className='bg-white w-full max-w-sm flex flex-col items-center gap-6 py-10 px-6 rounded-2xl'>
                <div className='flex flex-col items-center gap-2'>
                    <Image
                        src="/skillsync.svg"
                        alt="SkillSync Logo"
                        width={250}
                        height={250}
                        className='mb-4 w-[175px]'
                        priority
                    />
                    <h1 className='text-3xl font-bold text-center text-gray-800'>Welcome to SkillSync</h1>
                    <p className='text-base text-gray-600 text-center'>
                        Your platform to sync and enhance your skills.
                    </p>
                </div>

                <div className='w-full space-y-4'>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className='w-full px-4 py-2 border-gray-300 focus:border-amber-500 focus:ring-transparent'
                            autoComplete="email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-1'>
                            Password
                        </label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className='w-full px-4 py-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500 focus:ring-1'
                            autoComplete="current-password"
                        />
                    </div>

                    <Button className='w-full mt-2 py-2 text-base font-medium'>
                        Sign In
                    </Button>
                </div>

                <div className='text-sm text-gray-500 mt-2'>
                    Don't have an account?{' '}
                    <a href="/register" className='text-blue-600 hover:underline'>
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LoginPage