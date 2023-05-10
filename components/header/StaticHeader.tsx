import Image from "next/image";
import {urlFor} from "@/sanity/sanity-utils";
import React from "react";
import contactImage from "../../public/images/img_contact.jpg"

function StaticHeader() {
    return (
        <header
            className="relative w-full h-[150px] xl:h-[250px] flex flex-col justify-center items-center">

            <div className="relative bg-stone-900 bg-opacity-90 z-20 w-full h-full " />
                <Image
                    className="absolute w-full h-[150px] xl:h-[250px] object-cover object-bottom xl:object-center z-0"
                    src={contactImage} alt="kontakt" fill={true}/>


        </header>
    )
}

export default StaticHeader