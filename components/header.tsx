'use client'

import Container from '@/components/container'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
// import { Switch } from "@/components/ui/switch"

const Header = () => {
    const path = usePathname();
    return (
        <div className='w-full bg-secondary sticky top-0 flex items-center z-50'>
            <Container variant='xl'>
                <div className='flex items-center justify-between py-4'>
                    <Link href='/'>
                        <Image
                            src="/images/skillsync-logo.svg"
                            alt="SkillSync Logo"
                            width={100}
                            height={100}
                            className='w-40 object-contain'
                        />
                    </Link>
                    <nav className='md:block hidden space-x-6'>
                        <Link href="/" className={`${path === '/' ? 'text-accent' : 'text-foreground'} text-base font-medium hover:text-accent transition-colors duration-300`}>Home</Link>
                        <Link href="/features" className={`${path === '/features' ? 'text-accent' : 'text-foreground'} text-base font-medium hover:text-accent transition-colors duration-300`}>Features</Link>
                        <Link href="/explore" className={`${path === '/explore' ? 'text-accent' : 'text-foreground'} text-base font-medium hover:text-accent transition-colors duration-300`}>Explore</Link>
                        <Link href="/about" className={`${path === '/about' ? 'text-accent' : 'text-foreground'} text-base font-medium hover:text-accent transition-colors duration-300`}>About</Link>
                        <Link href="/contact" className={`${path === '/contact' ? 'text-accent' : 'text-foreground'} text-base font-medium hover:text-accent transition-colors duration-300`}>Contact</Link>
                    </nav>

                    <div className="flex items-center gap-3">
                        {/* <Switch className="translate-y-0.5" /> */}
                        <Button variant="ghost" className="hover:text-background" size="sm">
                            <Link href='/login'>Login</Link>
                        </Button>
                        <Button size="sm">
                            <Link href='/login'>Sign Up</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header