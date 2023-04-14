function Header() {
    return (
        <header className="bg-law-bck w-full h-screen bg-cover bg-center">
            <div className="relative container mx-auto h-screen flex flex-col justify-center items-start px-4">

                <div className="w-full xl:w-3/5 animate-slideleft">
                    <h1 className="text-6xl xl:text-7xl font-bold py-4 text-center xl:text-start text-stone-50">Odvjetnički ured
                        <span className="text-primary-color"> Frano </span>
                        Baković</h1>

                    <h3 className="text-lg xl:text-xl font-light text-stone-50 text-center xl:text-start tracking-wide">
                        Dobrodošli na stranicu našeg odvjetničkog ureda. Pružamo visokokvalitetne pravne usluge i brinemo o vašim pravima i interesima.
                    </h3>
                </div>
            </div>
        </header>
    )
}

export default Header