import React from 'react'
import Container from '@/components/container'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='sticky top-0 w-full bg-background text-foreground py-6'>
            <Container>
                <div className='border-t border-foreground/10 pt-6'>
                    <div className='flex justify-between items-center text-center gap-2'>
                        <div className="flex gap-4 items-center">
                            <Link href='/'>
                                <Image
                                    src="/images/skillsync-logo.svg"
                                    alt="SkillSync Logo"
                                    width={100}
                                    height={100}
                                    className='w-40 object-contain'
                                />
                            </Link>
                            <p className='text-sm text-foreground/70'>
                                © {new Date().getFullYear()} Skillsync Mini. All rights reserved.
                            </p>
                        </div>
                        <p className='text-sm text-foreground/70'>
                            Made with <i className="fi fi-sr-heart text-primary"></i> by Clever Creative
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer