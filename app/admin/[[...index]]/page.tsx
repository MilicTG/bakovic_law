"use client"

import {NextStudio} from "next-sanity/studio";
import config from "@/sanity.config";

function AdminPage() {
    return (
        <section className="absolute z-50 w-full h-full bg-gray-800 top-96">
            <NextStudio config={config}/>
        </section>

    )
}


export default AdminPage