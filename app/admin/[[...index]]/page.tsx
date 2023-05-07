"use client"

import {NextStudio} from "next-sanity/studio";
import config from "@/sanity.config";

function AdminPage() {
    return (
        <section className="relative w-full h-screen bg-stone-50 z-50 top-96">
            <NextStudio config={config}/>
        </section>

    )
}


export default AdminPage