import {Asset} from "@/types/AboutUsData";
import Image from "next/image";
import {urlFor} from "@/sanity/sanity-utils";
import React from "react";

interface PageHeaderProps{
    title: string,
    image: Asset
}


function PageHeader(props: PageHeaderProps) {
    return (
        <header
            className="relative h-[350px] xl:h-[450px] flex flex-col justify-center items-center">

            <Image className="absolute w-full h-[350px] xl:h-[450px] object-cover object-bottom xl:object-center z-20"
                   src={urlFor(props.image._ref).width(2000).url()} alt={props.title} fill={true}/>

            <div  className="w-full h-full px-8 xl:px-4 flex justify-center items-center flex-col bg-stone-900 bg-opacity-80 animate-slideleft z-30">
                <h2 className="text-3xl xl:text-5xl font-bold font-serif text-stone-50 text-center xl:text-start tracking-tight xl:tracking-wide animate-slideup">
                    {props.title}
                </h2>
            </div>
        </header>
    )
}

export default PageHeader