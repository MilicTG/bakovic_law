interface SectionTitleWithDescription {
    title: string,
    description: string
}

function SectionTitleWithDescription(props: SectionTitleWithDescription) {
    return (
        <div className="w-full xl:w-2/4 flex flex-col px-4 justify-center items-center">
            <div className="w-20 h-1 bg-slate-400 rounded-2xl"/>
            <h3 className="text-4xl xl:text-5xl text-slate-50 text-center font-serif font-bold my-4">
                {props.title}
            </h3>
            <p className="text-sm text-stone-200 text-center">
                {props.description}
            </p>
        </div>
    )
}

export default SectionTitleWithDescription