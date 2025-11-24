import { Link } from '@inertiajs/react';
import React, { StrictMode } from "react";

export default function AppNav() {
    const navItems = [
        {
            name: 'Home',
            href: '#'
        },
        {
            name: 'Contact',
            href: '#'
        },
        {
            name: 'About',
            href: '#'
        },
    ]

    return (
        <StrictMode>
            <nav className="shadow-sm z-50 fixed w-full">
                <div className="py-3.5 px-20 flex justify-between items-center max-w-7xl mx-auto font-bold text-slate-800">
                    <div className="">
                        <a href="">Logo</a>
                    </div>

                    <div className="ml-16 text-[13px]">
                        <ul className="flex gap-9">
                            {navItems.map((item) => (
                                <Link href={item.href} className="py-1.5 px-3 rounded-md transition-all duration-200 hover:bg-slate-200">{item.name}</Link>
                            ))}
                        </ul>
                    </div>

                    <a href="" className="border text-[13px] py-2 px-5 rounded-sm shadow-sm hover:bg-slate-800 hover:text-white transition-all ease-in-out duration-300">
                        Instagram
                    </a>
                </div>
            </nav>
        </StrictMode>
    )
}