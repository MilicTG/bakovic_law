import React from "react";
import '@/styles/globals.css'

import {Navbar, Footer} from "@/components";

export const metadata = {
    title: 'Odvjetnik Baković',
    description: 'Odvjetnički ured Frano Baković',
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body className="bg-stone-50">
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}

