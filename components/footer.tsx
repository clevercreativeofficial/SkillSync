'use client'

import React from 'react'
import Container from '@/components/container'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background pt-16 pb-6 text-foreground">
            <Container variant='xl'>
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col sm:flex-row justify-between gap-6">
                        {/* Branding & Socials */}
                        <div className="max-w-[415px] w-full flex flex-col">
                            <Link href="/" aria-label="Go to SkillSync homepage" className="inline-block w-40 mb-4">
                                <Image
                                    src="/images/skillsync-logo.svg"
                                    alt="SkillSync Logo"
                                    width={160}
                                    height={40}
                                    className="object-contain"
                                />
                            </Link>
                            <p className="text-foreground/75 mb-6">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
                            </p>
                            <nav aria-label="Social media links">
                                <ul className="flex gap-3">
                                    {/* Example social icon item */}
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/50 transition hover:opacity-75"
                                            aria-label="Facebook"
                                        >
                                            {/* Facebook SVG */}
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                    {/* Repeat for other socials */}
                                </ul>
                            </nav>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="max-w-[415px] w-full">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Get the latest news!</h2>
                                <p className="text-foreground/75 mb-6">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
                                </p>
                            </div>
                            <form className="max-w-xs" onSubmit={e => e.preventDefault()}>
                                <label htmlFor="UserEmail" className="sr-only">Email address</label>
                                <div className="sm:flex sm:items-center sm:gap-4">
                                    <Input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="john@rhcp.com"
                                        required
                                        className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                                    />
                                    <Button type="submit" className="bg-accent hover:bg-accent/50 text-foreground mt-3 sm:mt-0" size="sm">
                                        Sign Up
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Link Sections */}
                    <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-y-16">
                        {[
                            {
                                title: 'Services',
                                links: ['1on1 Coaching', 'Company Review', 'Accounts Review', 'HR Consulting', 'SEO Optimisation'],
                            },
                            {
                                title: 'Company',
                                links: ['About', 'Meet the Team', 'Accounts Review'],
                            },
                            {
                                title: 'Helpful Links',
                                links: ['Contact', 'FAQs', 'Live Chat'],
                            },
                            {
                                title: 'Legal',
                                links: ['Accessibility', 'Returns Policy', 'Refund Policy', 'Hiring-3 Statistics'],
                            },
                            {
                                title: 'Downloads',
                                links: ['Marketing Calendar', 'SEO Infographics'],
                            },
                        ].map(({ title, links }) => (
                            <nav key={title} aria-label={title}>
                                <p className="font-medium mb-6">{title}</p>
                                <ul className="space-y-4 text-sm">
                                    {links.map(link => (
                                        <li key={link}>
                                            <a href="#" className="text-foreground/50 transition hover:opacity-75">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 border-t pt-8">
                    <div className="sm:flex sm:justify-between items-center gap-4">
                        <p className="text-xs text-foreground/50">
                            &copy; {currentYear}. SkillSync. All rights reserved.
                        </p>

                        <nav aria-label="Legal links">
                            <ul className="flex flex-wrap gap-4 text-xs justify-start sm:justify-end">
                                {['Terms & Conditions', 'Privacy Policy', 'Cookies'].map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-foreground/50 transition hover:opacity-75">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;
