'use client'

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

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