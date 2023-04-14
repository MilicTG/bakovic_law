"use client"

import Image from "next/image";
import logo from "@/public/logo/svg_logo.svg";
import Link from "next/link";
import {Divide as Hamburger} from "hamburger-react";
import React, {useState} from "react";


function Navbar() {

    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="w-full bg-stone-50 bg-opacity-10 fixed top-0 z-50">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Logo"
                        className="px-4 py-8 w-56"
                    />
                </Link>

                <ul className="hidden xl:flex flex-row">
                    <li className="text-stone-50 hover:text-primary-color font-semibold mr-6 cursor-pointer transition ease-in-out duration-300">
                        Početna
                    </li>
                    <li className="text-stone-50 hover:text-primary-color font-semibold mr-6 cursor-pointer transition ease-in-out duration-300">
                        Pravna područja
                    </li>
                    <li className="text-stone-50 hover:text-primary-color font-semibold mr-6 cursor-pointer transition ease-in-out duration-300">
                        O nama
                    </li>
                    <li className="text-stone-50 hover:text-primary-color font-semibold mr-6 cursor-pointer transition ease-in-out duration-300">
                        Kontakt
                    </li>
                </ul>

                <div
                    className="flex xl:hidden items-center mr-4 text-stone-50 hover:text-stone-300 transition ease-in-out duration-300">
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
                            Pravna područja
                        </li>
                        <li className="text-stone-900 hover:text-primary-color font-semibold mb-6 cursor-pointer transition ease-in-out duration-300">
                            O nama
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