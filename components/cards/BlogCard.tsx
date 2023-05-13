import {Asset} from "@/types/BlogData";
import Image from "next/image";
import Link from "next/link";
import {urlFor} from "@/sanity/sanity-utils";
import React from "react";

interface BlogCardProps {
    title:string,
    image: Asset,
    slug:string
}

function BlogCard(props: BlogCardProps) {
    return (
        <Link href={`/blog/${props.slug}`} key={props.title}>
            <div
                className="flex flex-col w-full h-full border border-stone-300 hover:border-stone-700 justify-center xl:justify-start items-center shadow hover:shadow-xl active:shadow  transition duration-300 ease-in-out cursor-pointer">
                <div className="relative h-60 w-full">
                    <Image className="object-cover object-center"
                           src={urlFor(props.image._ref).width(1000).url()}
                           alt={props.title}
                           fill={true}/>
                </div>

                <h5 className="text-3xl font-semibold text-primary-color text-center px-4 py-8 font-serif">{props.title}</h5>
            </div>
        </Link>
    )
}

export default BlogCard