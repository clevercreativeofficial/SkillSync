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
                                    {
                                        [
                                            {
                                                platform: 'Facebook',
                                                icon: 'facebook',
                                                link: 'facebook'
                                            },
                                            {
                                                platform: 'Instagram',
                                                icon: 'instagram',
                                                link: 'instagram'
                                            },
                                            {
                                                platform: 'X',
                                                icon: 'twitter-alt',
                                                link: 'x'
                                            },
                                        ].map(social => (
                                            <li key='index'>
                                                <a
                                                    href={social.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-foreground/50 transition hover:opacity-75"
                                                    aria-label={social.platform}
                                                >
                                                    <i className={`fi fi-brands-${social.icon}`}></i>
                                                </a>
                                            </li>
                                        ))
                                    }
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
