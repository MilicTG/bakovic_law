import React from "react";
import {Asset} from "@/types/LawCategoryData";
import Image from "next/image";
import {urlFor} from "@/sanity/sanity-utils";

interface PracticeCardProps {
    icon: Asset,
    title: string,
    description: string
}


function PracticeCard(props: PracticeCardProps) {
    return (
        <div
            className="aspect-square relative w-full h-full xl:w-96 xl:h-96 flex flex-col border border-stone-300 justify-center xl:justify-start items-center p-10">
            <div className="relative h-20 w-20">
                <Image className="object-cover object-center"
                       src={urlFor(props.icon._ref).width(100).url()}
                       alt={props.title}
                       fill={true}/>
            </div>

            <h6 className="text-3xl text-slate-800 font-light text-center py-4 font-serif">{props.title}</h6>
            <p className="text-base text-slate-600 text-center font-light">{props.description}</p>
        </div>
    )
}

export default PracticeCard