"use client";
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '../../constants'
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <header className='header'>
            <Link href='/' className='flex items-center gap-2 md:py-2'>
                <Image
                    src="/assets/images/logo-text.svg"
                    alt="logo"
                    width={180}
                    height={28}
                />
            </Link>

            <nav className='flex gap-2'>
                <SignedIn>
                    <UserButton />
                    <Sheet>
                        <SheetTrigger>
                            <Image 
                                src='/assets/icons/menu.svg'
                                alt="menu"
                                width={32}
                                height={32}
                                className='cursor-pointer'
                            />
                        </SheetTrigger>
                        <SheetContent className='sheet-content cm:w-64'>
                            <>
                                <Image 
                                    src='/assets/images/logo-text.svg'
                                    alt='logo'
                                    width={125}
                                    height={23}
                                />
                                <ul className="header-nav_elements">
                            {navLinks.map((link) => {                    //this navlinks come from constants/index.ts and for each link, we open up a function block
                                const isActive = link.route === pathname //this is to check if we are currently at the link that we're trying to go. 
                                // Also, pathname comes from use pathname hook

                                return (
                                    <li  className={`${isActive && 'gradient-text'
                                        } p-18 flex whitespace-nowrap text-dark-700`} key={link.route}>
                                        <Link className='sidebar-link cursor-pointer' href={link.route}>
                                            <Image
                                                src={link.icon}
                                                alt='logo'
                                                width={24}
                                                height={24}
                                                
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )

                            })}
                        </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>
                <SignedOut>
                        <Button asChild className='button bg-teal bg-cover'>
                            <Link href='/sign-in'>Login</Link>
                        </Button>
                </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav
