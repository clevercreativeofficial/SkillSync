import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"

const page = () => {
    return (
        <div className='w-full min-h-[90vh] flex justify-center items-center'>
            <form className='max-w-[345px] w-full py-10 px-6 bg-white rounded-2xl' action="">
                <div className='flex flex-col gap-4'>
                    <Image
                        src="/images/skillsync-logo.svg"
                        alt="SkillSync Logo"
                        width={100}
                        height={100}
                        className='mx-auto mb-4 w-40 object-contain'
                    />
                    <h1 className='text-2xl font-bold text-center'>Sign Up</h1>
                    <p className="text-sm text-gray-500 mb-4">
                        Create your account by filling in the details below.
                    </p>
                    
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


                    <Separator className='my-4' />
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="username">Username</Label>
                        <Input className="text-sm" type="username" id="username" placeholder="Username" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="email">Email</Label>
                        <Input className="text-sm" type="email" id="email" placeholder="Enter your email" />
                    </div>

                    <Button className='w-full font-semibold bg-rose-500 cursor-pointer duration-300'>Sign Up</Button>



                    <p className='text-sm text-gray-500'>
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