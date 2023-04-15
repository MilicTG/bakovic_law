import React from "react";

interface PracticeCardProps {
    icon: React.ReactNode,
    title: string,
    description: string
}


function PracticeCard(props: PracticeCardProps) {
    return (
        <div className="aspect-square w-full h-full xl:w-96 xl:h-96 flex flex-col border border-stone-300 justify-center xl:justify-start items-center p-10">
            {props.icon}
            <h6 className="text-3xl text-slate-800 font-light text-center py-4 font-serif">{props.title}</h6>
            <p className="text-base text-slate-600 text-center font-light">{props.description}</p>
        </div>
    )
}

export default PracticeCard