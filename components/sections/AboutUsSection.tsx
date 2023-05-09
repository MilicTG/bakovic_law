import {AsideTitle} from "@/components"
import {AboutUsType} from "@/types/AboutUsData";
import {PortableText} from "@portabletext/react";
import Image from "next/image";
import {urlFor} from "@/sanity/sanity-utils";
import React from "react";

interface AboutUsSectionProps {
    aboutUsData: AboutUsType
}


function AboutUsSection(
    props: AboutUsSectionProps
) {
    return (
        <section
            id="about"
            className="w-full bg-stone-50 py-24">
            <div className="container mx-auto flex flex-col">

                <div className="w-full flex flex-col xl:flex-row items-center animate-slideleft">

                    <div className='w-full xl:w-2/4 flex flex-col'>
                        <AsideTitle title="Pravna tradicija"/>

                        <div className="text-lg font-medium text-stone-700 tracking-wide leading-8">
                            <PortableText
                                value={props.aboutUsData.traditionContent}
                                components={
                                    {
                                        block: {
                                            normal: ({children}) => <p className="text-stone-700">{children}<br/></p>,
                                        }
                                    }
                                }
                            />
                        </div>

                    </div>

                    <div
                        className="relative w-full h-[270px] xl:h-[400px] xl:w-3/5 ml-0 mt-8 xl:ml-12 xl:mt-0 rounded-xl shadow-2xl">
                        <Image className="object-cover object-center rounded-xl"
                               src={urlFor(props.aboutUsData.traditionPoster.asset._ref).width(1000).url()}
                               alt={props.aboutUsData._id}
                               fill={true}/>
                    </div>

                </div>

                <div className="w-full flex flex-col xl:flex-row-reverse mt-32 mb-40 items-center animate-slideright">

                    <div className='w-full xl:w-2/4 flex flex-col'>
                        <AsideTitle title="Biografija"/>

                        <div className="text-lg font-medium text-stone-700 tracking-wide leading-8">
                            <PortableText
                                value={props.aboutUsData.bioContent}
                                components={
                                    {
                                        block: {
                                            normal: ({children}) => <p className="text-stone-700">{children}<br/></p>,
                                        }
                                    }
                                }
                            />
                        </div>

                    </div>

                    <div
                        className="relative w-full h-[270px] xl:h-[400px] xl:w-3/5 mr-0 mt-20 xl:mr-12 xl:mt-0 rounded-xl shadow-2xl">
                        <Image className="object-cover object-center rounded-xl"
                               src={urlFor(props.aboutUsData.bioPoster.asset._ref).width(1000).url()}
                               alt={props.aboutUsData._id}
                               fill={true}/>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default AboutUsSection