import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/container';
import { Button } from './ui/button';


const Header = () => {

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
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
