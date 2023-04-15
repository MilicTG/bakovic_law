"use client"

import Image from "next/image";
import logo from "@/public/logo/svg_logo.svg";
import Link from "next/link";
import {Divide as Hamburger} from "hamburger-react";
import React, {useEffect, useState} from "react";


function Navbar() {

    const [isOpen, setOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [top, setTop] = useState(true)

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        if (scrollPosition < 30) {
            setTop(true)
        } else {
            setTop(false)
        }
        console.log(scrollPosition)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <nav
            className={`${top ? 'bg-transparent' : 'bg-stone-50'} w-full fixed top-0 z-50 bg-opacity-90 transition ease-in-out duration-300`}>
            <div className="container mx-auto flex flex-row items-center justify-between">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Logo"
                        className="px-4 py-8 w-56"
                    />
                </Link>

                <ul className="hidden xl:flex flex-row">
                    <li className={`${top ? 'text-stone-50 hover:text-primary-color' : 'text-primary-color hover:text-stone-500'} font-semibold mr-6 cursor-pointer transition ease-in-out duration-300`}>
                        Početna
                    </li>
                    <li className={`${top ? 'text-stone-50 hover:text-primary-color' : 'text-primary-color hover:text-stone-500'} font-semibold mr-6 cursor-pointer transition ease-in-out duration-300`}>
                        O nama
                    </li>
                    <li className={`${top ? 'text-stone-50 hover:text-primary-color' : 'text-primary-color hover:text-stone-500'} font-semibold mr-6 cursor-pointer transition ease-in-out duration-300`}>
                        Pravna područja
                    </li>
                    <li className={`${top ? 'text-stone-50 hover:text-primary-color' : 'text-primary-color hover:text-stone-500'} font-semibold mr-6 cursor-pointer transition ease-in-out duration-300`}>
                        Kontakt
                    </li>
                </ul>

                <div
                    className={`${top ? 'text-stone-50 hover:text-primary-color' : 'text-primary-color hover:text-stone-500'} flex xl:hidden items-center mr-4 transition ease-in-out duration-300`}>
                    <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>

                <div
                    className={`absolute top-0 h-screen w-2/3 bg-stone-50 z-50 p-6 xl:hidden smooth-transition transition ease-in-out duration-300 ${
                        isOpen ? "left-0" : "-left-full"
                    }`}
                >
                    <ul className="flex flex-col items-start mt-4">
                        <li>
                            <Link href="/">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    className=" pb-12 w-56"
                                />
                            </Link>
                        </li>
                        <li className="text-stone-900 hover:text-primary-color font-semibold mb-6 cursor-pointer transition ease-in-out duration-300">
                            Početna
                        </li>
                        <li className="text-stone-900 hover:text-primary-color font-semibold mb-6 cursor-pointer transition ease-in-out duration-300">
                            O nama
                        </li>
                        <li className="text-stone-900 hover:text-primary-color font-semibold mb-6 cursor-pointer transition ease-in-out duration-300">
                            Pravna područja
                        </li>
                        <li className="text-stone-900 hover:text-primary-color font-semibold mb-6 cursor-pointer transition ease-in-out duration-300">
                            Kontakt
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar