import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const page = () => {
    return (
        <div className='w-full min-h-[90vh] flex justify-center items-center'>
            <form className='max-w-sm mx-auto w-full py-10 px-6 bg-background rounded-2xl' action="">
                <div className='flex flex-col gap-4'>
                    <Image
                        src="/images/skillsync-logo.svg"
                        alt="SkillSync Logo"
                        width={100}
                        height={100}
                        className='mx-auto mb-4 w-40 object-contain'
                    />
                    <h1 className='text-2xl font-bold text-center'>Verify Email</h1>
                    <p className="text-sm text-center text-gray-500 mb-4">
                        We&apos;ve sent an email to <strong>jzadesh@gmail.com</strong>. Continue account creation using the link via email.
                    </p>

                    <Button className='w-full font-semibold bg-rose-500 cursor-pointer duration-300'>Resend the link</Button>
                    <Button variant='outline'>Change Email</Button>

                    <p className='text-sm text-center text-gray-500'>
                        Already have an account?
                        <Link href="/login" className='text-blue-500 hover:underline'>
                            <Button variant={'link'} className="text-rose-500 cursor-pointer">Sign In</Button>
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default page