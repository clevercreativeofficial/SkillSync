import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage, } from '@/components/ui/avatar'
import ThemeToggle from '@/components/layout/themeToggle';
import { useRouter, usePathname } from "next/navigation"

import MobileNavbar from '@/components/layout/navbar'


const Header = () => {
    const router = useRouter()
    const path = usePathname()

    const handleLogout = () => {
        localStorage.setItem('isAuthenticated', 'false')
        router.push('/')
    }
    return (
        <header className="w-full bg-secondary sticky top-0 z-50 flex items-center">
            <Container variant="lg">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" aria-label="SkillSync homepage">
                        <Image
                            src="/images/skillsync-logo.svg"
                            alt="SkillSync Logo"
                            width={160}
                            height={40}
                            className="object-contain"
                            priority
                            aria-hidden="true"
                        />
                    </Link>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        {localStorage.getItem('isAuthenticated') == 'true' && localStorage.getItem('role') == 'talent' ? (
                            <>
                                <div className="md:flex hidden text-base font-medium justify-between items-center gap-10">
                                    <Link href="/dashboard" className={`${path === '/dashboard' ? 'text-accent' : ''}`} passHref>
                                        Home
                                    </Link>
                                    <Link href="/dashboard/projects" className={`${path === '/dashboard/projects' ? 'text-accent' : ''}`} passHref>
                                        Explore
                                    </Link>
                                    <Link href="/dashboard/applications" className={`${path === '/dashboard/applications' ? 'text-accent' : ''}`} passHref>
                                        Applications
                                    </Link>
                                    <Button className="hidden" onClick={() => handleLogout()} variant="destructive" size="sm">
                                        Log Out
                                    </Button>
                                </div>
                                <div className="md:hidden flex max-w-md w-full fixed sm:bottom-4 bottom-2 left-1/2 -translate-1/2 py-4 px-6 rounded-full bg-background/50 backdrop-blur-xl border">
                                    <MobileNavbar />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="md:flex hidden text-base font-medium justify-between items-center gap-10">
                                    <Link href="/" className={`${path === '/' ? 'text-accent' : ''}`} passHref>
                                        Home
                                    </Link>
                                    <Link href="/contact" className={`${path === '/contact' ? 'text-accent' : ''}`} passHref>
                                        Contact
                                    </Link>
                                    <Link href="/legal" className={`${path === '/legal' ? 'text-accent' : ''}`} passHref>
                                        Legal
                                    </Link>
                                    <Link href="/about" className={`${path === '/about' ? 'text-accent' : ''}`} passHref>
                                        About
                                    </Link>
                                </div>
                            </>
                        )}

                    </div>

                    <div className="flex items-center text-foreground gap-3">
                        <ThemeToggle />
                        {localStorage.getItem('isAuthenticated') == 'true' ? (
                            <>
                                <div className="w-8 h-8 flex justify-center items-center bg-background rounded-full"><i className="fi fi-rr-messages"></i></div>
                                <div className="w-8 h-8 flex justify-center items-center bg-background rounded-full"><i className="fi fi-rr-bell-notification-social-media"></i></div>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </>
                        ) : (
                            <>
                                <Link href="/login" passHref>
                                    <Button variant="ghost" size="sm">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/sign-up" passHref>
                                    <Button size="sm">
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* <ThemeToggle /> */}
                </div>
            </Container>
        </header>
    );
};

export default Header;
