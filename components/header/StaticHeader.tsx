import Image, {StaticImageData} from "next/image";
import React from "react";


interface StaticHeaderProps {
    image: StaticImageData
}

function StaticHeader(props: StaticHeaderProps) {
    return (
        <header
            className="relative w-full h-[150px] xl:h-[300px] flex flex-col justify-center items-center">

            <div className="relative bg-stone-900 bg-opacity-80 z-20 w-full h-full " />
                <Image
                    className="absolute w-full h-[150px] xl:h-[300px] object-cover object-bottom xl:object-center z-0"
                    src={props.image} alt="kontakt" fill={true}/>


        </header>
    )
}

export default StaticHeader