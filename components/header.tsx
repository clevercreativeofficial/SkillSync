import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/container';
import { Button } from './ui/button';
import ThemeToggle from '@/components/themeToggle';
import { useRouter, usePathname } from "next/navigation"

import MobileNavbar from '@/components/navbar'


const Header = () => {
    const router = useRouter()
    const path = usePathname()

    const handleLogout = () => {
        localStorage.setItem('isAuthenticated', 'false')
        router.push('/')
    }
    return (
        <header className="w-full bg-secondary sticky top-0 z-50 flex items-center">
            <Container variant="xl">
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
                        {localStorage.getItem('isAuthenticated') == 'true' ? (
                            <>
                                <div className="md:flex hidden justify-between items-center gap-8">
                                    <Link href="/" className={`${path === '/' ? 'text-accent' : ''}`} passHref>
                                        Home
                                    </Link>
                                    <Link href="/features" className={`${path === '/features' ? 'text-accent' : ''}`} passHref>
                                        Features
                                    </Link>
                                    <Link href="/projects" className={`${path === '/projects' ? 'text-accent' : ''}`} passHref>
                                        Explore
                                    </Link>
                                    <Link href="/about" className={`${path === '/about' ? 'text-accent' : ''}`} passHref>
                                        About
                                    </Link>
                                    <Button onClick={() => handleLogout()} variant="destructive" size="sm">
                                        Log Out
                                    </Button>
                                </div>
                                <div className="md:hidden flex max-w-md w-full fixed sm:bottom-4 bottom-2 left-1/2 -translate-1/2 py-4 px-6 rounded-full bg-background/50 backdrop-blur-xl border">
                                    <MobileNavbar />
                                </div>
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

                        <ThemeToggle />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
