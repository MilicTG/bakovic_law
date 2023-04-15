"use client"
import {PrimaryButton} from "@/components";

const navigateToContact = async () => {
    console.log("click")
}

function Header() {
    return (
        <header className="bg-law-bck w-full h-[700px] xl:h-screen flex justify-center items-center bg-cover bg-center">
            <div className="relative container mx-auto h-full flex flex-col justify-center items-center xl:items-start px-4 animate-slideleft">

                <div className="w-full xl:w-3/6 animate-slideleft">
                    <h1 className="text-5xl xl:text-7xl font-bold font-serif tracking-wide py-4 text-center xl:text-start text-stone-50">Odvjetnički
                        ured
                        <span className="text-primary-color"> Frano </span>
                        Baković</h1>

                    <h3 className="text-sm xl:text-base font-light text-stone-50 text-center xl:text-start tracking-tight xl:tracking-wide mb-24 xl:mb-10">
                        Dobrodošli na stranicu našeg odvjetničkog ureda. Pružamo visokokvalitetne pravne usluge i
                        brinemo o vašim pravima i interesima.
                    </h3>
                </div>
                <PrimaryButton title="Kontaktirajte nas" onClick={navigateToContact}/>
            </div>
        </header>
    )
}

export default Header