"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Page = () => {
    const path = usePathname()
    return (
        <nav className='w-full flex justify-between gap-1'>
            <Link href="/" className={`${path === '/' ? 'text-accent' : 'text-foreground'} text-base font-medium hover:text-accent transition-colors duration-300`}>
                <div className="flex flex-col gap-1 items-center">
                    <i className={`fi fi-${path === '/' ? 'sr' : 'rr'}-home`}></i>
                    <small>Home</small>
                </div>
            </Link>
            <Link href="/features" className={`${path === '/features' ? 'text-accent' : 'text-foreground'} text-base font-medium hover:text-accent transition-colors duration-300`}>
                <div className="flex flex-col gap-1 items-center">
                    <i className={`fi fi-${path === '/features' ? 'sr' : 'rr'}-sparkles`}></i>
                    <small>Features</small>
                </div>
            </Link>
            <Link href="/explore" className={`${path === '/explore' ? 'text-accent' : 'text-foreground'} text-base font-medium hover:text-accent transition-colors duration-300`}>
                <div className="flex flex-col gap-1 items-center">
                    <i className={`fi fi-${path === '/explore' ? 'sr' : 'rr'}-search`}></i>
                    <small>Explore</small>
                </div>
            </Link>
            <Link href="/about" className={`${path === '/about' ? 'text-accent' : 'text-foreground'} text-base font-medium hover:text-accent transition-colors duration-300`}>
                <div className="flex flex-col gap-1 items-center">
                    <i className={`fi fi-${path === '/about' ? 'sr' : 'rr'}-info`}></i>
                    <small>About</small>
                </div>
            </Link>
        </nav>
    )
}

export default Page;