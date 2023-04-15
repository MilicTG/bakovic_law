"use client"

interface PrimaryButtonProps {
    title: string,
    onClick: () => void
}


function PrimaryButton(props: PrimaryButtonProps) {
    return (
        <button
            onClick={props.onClick}
            className="w-full md:w-64 py-4 bg-primary-color hover:bg-stone-50 text-stone-50 hover:text-stone-950 shadow hover:shadow-md active:shadow transition ease-in-out duration-300">
            {props.title}
        </button>
    )
}

export default PrimaryButton