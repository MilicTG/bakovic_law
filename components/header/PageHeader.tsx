function PageHeader() {
    return (
        <header className="bg-law-bck h-[350px] xl:h-[450px] flex flex-col justify-center items-center bg-cover bg-center">
            <h2 className="text-3xl xl:text-5xl font-bold text-stone-50 text-center xl:text-start tracking-tight xl:tracking-wide">
               O nama
            </h2>
            <p className="text-base xl:text-2xl font-bold font-serif tracking-wide py-4 text-center text-stone-50">Odvjetnički
                ured
                <span className="text-primary-color"> Frano </span>
                Baković</p>
        </header>
    )
}

export default PageHeader