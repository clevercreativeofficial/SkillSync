import { cookies } from 'next/headers'
import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "./globals.css";

import { Providers } from '@/components/themeProvider'


const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillSync",
  description: "A learning platform for developers",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  // Get theme from cookies or use default (server-side)
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')?.value || 'light'

  return (
    <html lang="en" className={theme}>
      <head>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/3.0.0/uicons-solid-rounded/css/uicons-solid-rounded.css'></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/3.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/3.0.0/uicons-brands/css/uicons-brands.css'></link>
      </head>
      <body className={`${quicksand.variable} ${inter.variable} antialiased` + " bg-background text-foreground"}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout