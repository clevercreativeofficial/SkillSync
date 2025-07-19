import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
                    <h1 className='text-2xl font-bold text-center'>Login</h1>
                    <p className="text-sm text-gray-500 mb-4">
                        Welcome back! Please enter your details to log in.
                    </p>

                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="email">Email</Label>
                        <Input className="text-sm" type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="password">Password</Label>
                        <Input className="text-sm" type="email" id="password" placeholder="Enter your email" />
                    </div>

                    <div className='flex items-center justify-between mt-2'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id="remember" className="accent-rose-500" />
                            <Label htmlFor="remember" className='text-sm text-gray-500'>Remember me</Label>
                        </div>
                        <Link href="/forgot-password" className='text-sm text-rose-500 hover:underline'>Forgot Password?</Link>
                    </div>
                    <Button className='w-full font-semibold bg-rose-500 cursor-pointer duration-300'>Login</Button>

                    <Button className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 w-full flex items-center justify-center gap-2 duration-300">
                        <Image
                            src="/images/google-logo.png"
                            alt="Google Icon"
                            width={20}
                            height={20}
                            className='mr-1'
                        />
                        Google
                    </Button>

                    <p className='text-sm text-gray-500'>
                        Don&apos;t have an account?
                        <Link href="/sign-up" className='text-blue-500 hover:underline'>
                            <Button variant={'link'} className="text-rose-500 cursor-pointer">Sign Up</Button>
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default page