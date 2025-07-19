import { Button } from "@/components/ui/button"
import Link from "next/link"
import Container from "@/components/container"

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (

        <div className="relative h-screen flex">
            <Link href='/'>
                <Button variant="ghost" className="absolute top-6 left-6">
                    <i className="fi fi-rr-arrow-small-left"></i>
                    Back Home
                </Button>
            </Link>
            
                <div className="w-full md:flex hidden items-center justify-center bg-secondary">
                    <Container>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-4">
                            <span className="block title">Welcome to</span>
                            <span className="block title text-rose-500">SkillSync.</span>
                        </h1>
                        <p className="max-w-[700px] text-lg text-muted-foreground">
                            SkillSync bridges the gap between talented creatives and exciting projects.
                            Build your portfolio, discover collaborations, and grow your career.
                        </p>
                    </Container>
                </div>
            
            <div className="md:max-w-md max-w-full w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout