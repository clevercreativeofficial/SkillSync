import Container from '@/components/container'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const header = () => {
    return (
        <div className='w-full bg-white sticky top-0 flex items-center'>
            <Container>
                <div className='flex items-center justify-between py-4'>
                    <Link href='/'>
                        <Image
                            src="/images/skillsync-logo.svg"
                            alt="SkillSync Logo"
                            width={100}
                            height={100}
                            className='w-40 object-contain'
                        /></Link>
                    <nav className='space-x-4'>
                        <Link href="/" className='text-gray-700 text-base font-medium hover:text-rose-500 transition-colors duration-300'>Home</Link>
                        <Link href="/about" className='text-gray-700 text-base font-medium hover:text-rose-500 transition-colors duration-300'>About</Link>
                        <Link href="/contact" className='text-gray-700 text-base font-medium hover:text-rose-500 transition-colors duration-300'>Contact</Link>
                        <Button className='bg-rose-500 text-white cursor-pointer ml-6 text-base font-semibold hover:bg-rose-600 transition-colors duration-300'>
                            <Link href='/login'>Login</Link>
                        </Button>
                    </nav>
                </div>
            </Container>
        </div>
    )
}

export default header