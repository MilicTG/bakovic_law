import React from "react";
import '@/styles/globals.css'

import {Navbar} from "../components"

export const metadata = {
    title: 'Odvjetnik Baković',
    description: 'Odvjetnički ured Frano Baković',
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        {children}
        </body>
        </html>
    );
}

