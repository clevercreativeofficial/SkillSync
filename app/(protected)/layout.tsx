'use client'

import Header from "@/components/header"
import Footer from "@/components/footer"

import { store } from '@/lib/redux/store'
import { Provider } from 'react-redux'


const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Provider store={store}>
            <Header />
            {children}
            <Footer />
        </Provider>
    )
}

export default Layout