'use client'
import Header from "@/components/header"
import Footer from "@/components/footer"


const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (

        <>
            <Header />
                {children}
            <Footer />
        </>

    )
}

export default Layout