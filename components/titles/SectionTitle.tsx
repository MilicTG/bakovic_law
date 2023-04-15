interface SectionTitleProps{
    title: string
}

function SectionTitle(props: SectionTitleProps) {
    return (
        <div className="w-full xl:w-2/4 flex flex-col px-4 justify-center items-center">
            <div className="w-20 h-1 bg-slate-900 rounded-2xl"/>
            <h3 className="text-4xl xl:text-5xl text-primary-color text-center font-serif font-bold mt-4">
                {props.title}
            </h3>
        </div>
    )
}

export default SectionTitle