import Image from 'next/image';

import logo from "../public/logo/svg_logo.svg"

import {PhoneIcon, EnvelopeIcon} from '@heroicons/react/24/solid'


export default function Home() {
    return (
        <main className="w-full h-full">
            <div className="bg-law-bck w-full h-screen bg-cover bg-center">

                <div className="relative container mx-auto h-screen flex flex-col justify-center items-center px-12">
                    <Image
                        src={logo}
                        alt="Logo"
                        className="px-4 xl:px-20 w-full xl:w-[1200px]"
                    />

                    <h1 className="text-4xl xl:text-6xl py-10 text-center text-white">Odvjetnički ured Frano Baković</h1>

                    <h3 className="text-white text-2xl xl:text-3xl text-center font-bold">
                        Kontakt info
                    </h3>
                    <div className="mt-4 flex flex-row items-center">
                        <PhoneIcon className="w-6 text-white"/>
                        <p className="text-white ml-4 font-bold">+387 63 244 470</p>
                    </div>
                    <div className="mt-4 flex flex-row items-center">
                        <EnvelopeIcon className="w-6 text-white"/>
                        <p className="text-white ml-4 font-bold">frano.bakovic.1c@gmail.com</p>
                    </div>
                </div>


            </div>


        </main>
    )
}
