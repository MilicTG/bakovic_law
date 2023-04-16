import logo_light from "@/public/logo/svg_logo_light.svg"
import Image from "next/image";
import React from "react";
import {PhoneIcon, EnvelopeIcon, BuildingOfficeIcon} from "@heroicons/react/24/outline";

function Footer() {

    const date = new Date();
    let year = date.getFullYear();

    return (
        <footer className="w-full bg-stone-800">
            <div
                className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-10 items-start justify-items-center ">

                <div className="w-72 py-8 flex flex-col items-start justify-start">
                    <Image
                        src={logo_light}
                        alt="Logo"
                        className="pt-2 pb-4 w-72 h-auto"
                    />
                    <p className="text-sm/[20px] text-slate-300 text-center xl:text-start font-light">
                        Vaša pouzdana zaštita u pravosuđu. Naše kvalifikacije pružaju mogućnost rješavanja problema bilo
                        koje složenosti.
                    </p>
                </div>

                <div className="w-full flex flex-col px-4 xl:px-0 py-8">
                    <h5 className="text-xl text-stone-500 font-semibold mb-4">Navigacija</h5>

                    <ul className="flex flex-col">
                        <li className="text-stone-50 hover:text-primary-color font-semibold mb-2 cursor-pointer transition ease-in-out duration-300">
                            Početna
                        </li>
                        <li className="text-stone-50 hover:text-primary-color font-semibold mb-2 cursor-pointer transition ease-in-out duration-300">
                            O nama
                        </li>
                        <li className="text-stone-50 hover:text-primary-color font-semibold mb-2 cursor-pointer transition ease-in-out duration-300">
                            Pravna područja
                        </li>
                        <li className="text-stone-50 hover:text-primary-color font-semibold mb-2 cursor-pointer transition ease-in-out duration-300">
                            Kontakt
                        </li>
                    </ul>
                </div>

                <div className="w-full flex flex-col px-4 xl:px-0 py-8">
                    <h5 className="text-xl text-stone-500 font-semibold mb-4">Kontakt</h5>

                    <div className="w-full mb-4 flex flex-row items-center text-stone-50 text-sm font-bold">
                        <BuildingOfficeIcon className="w-5 text-primary-color mr-3"/>Adresa: <span
                        className="font-semibold text-sm xl:text-base px-2 text-primary-color">Stjepana Radića 5</span>
                    </div>

                    <div className="w-full mb-4 flex flex-row items-center text-stone-50 text-sm font-bold">
                    <PhoneIcon
                            className="w-5 text-primary-color mr-3"/>Telefon: <span
                        className="font-semibold text-sm xl:text-base px-2 text-primary-color">+387 63 244-470</span>
                    </div>

                    <div className="w-full mb-4 flex flex-row items-center text-stone-50 text-sm font-bold">
                        <EnvelopeIcon
                            className="w-5 text-primary-color mr-3"/>E-Mail: <span
                        className="font-semibold text-sm xl:text-base px-2 text-primary-color">ured@odvjetnik-bakovic.com</span>
                    </div>
                </div>
            </div>

            <div className="border-t-[1px] border-stone-700 py-2">
                <div className="container mx-auto px-4 flex flex-col xl:flex-row justify-items-center justify-between">
                    <p className="text-sm text-stone-500 mb-2 xl:mb-0">Sva prava pridržana odvjetnik Frano Baković {year}.</p>

                    <div className="flex flex-row">
                        <p className="text-stone-500 text-sm mr-1">Dizajn i izrada: </p>
                        <a
                            href="https://delminiusdevs.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-stone-600 hover:text-stone-500 text-sm transition ease-in-out duration-300"
                        >
                            DelminiusDevs
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer