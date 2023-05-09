"use client"

import {urlFor} from "@/sanity/sanity-utils";
import {Image as headerImage} from "@/types/HeaderData";
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import React from "react";
import {PrimaryButton} from "@/components";
import {scroller} from "react-scroll";

interface DynamicHeaderProps {
    title: string,
    images: headerImage[]
}

function DynamicHeader(props: DynamicHeaderProps) {

    const navigateToContact = async () => {
        scroller.scrollTo("contact", {
            spy: true,
            smooth: true,
            duration: 500,
            offset: -70,
        });
    }

    return (
        <header className="w-full relative h-[850px] xl:h-screen flex justify-center items-center bg-cover bg-center">
            <div className="absolute z-20 w-full h-full top-0 left-0">
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                    interval={5000}
                    dynamicHeight={false}
                    className="w-full">
                    {props.images.map(image =>
                        <div key={image._key}
                             className="w-full h-[850px] xl:h-screen">
                            <Image className="w-full h-[850px] xl:h-screen object-cover object-bottom xl:object-center"
                                 src={urlFor(image.asset._ref).width(2000).url()} alt={image._key} fill={true}/>
                        </div>
                    )}
                </Carousel>
            </div>

            <div
                className="w-full h-full px-8 xl:px-4 flex justify-center items-center flex-col bg-stone-900 bg-opacity-80 animate-slideleft z-30">
                <h1 className="text-5xl xl:text-7xl font-bold font-serif tracking-wide py-4 mt-72 xl:mt-32 text-center xl:text-start text-stone-50">Odvjetnički
                    ured
                    <span className="text-primary-color"> Frano </span>
                    Baković</h1>

                <h3 className="text-sm xl:text-base font-light text-stone-50 text-center xl:text-start tracking-tight xl:tracking-wide mb-24 xl:mb-10">
                    {props.title}
                </h3>

                <PrimaryButton title="Kontaktirajte nas" onClick={navigateToContact}/>
            </div>

        </header>)
}

export default DynamicHeader