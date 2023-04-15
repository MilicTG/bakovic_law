import React from "react";

interface ExperienceCardProps {
    icon: React.ReactNode,
    title: string,
    description: string
}


function ExperienceCard(props: ExperienceCardProps) {
    return (
        <div className="flex flex-col items-center py-10">
            {props.icon}
            <h6 className="text-5xl text-slate-50 font-light py-4">{props.title}</h6>
            <p className="text-base text-slate-300 text-center font-bold uppercase">{props.description}</p>
        </div>
    )
}

export default ExperienceCard