import {AsideTitle} from "@/components"

function AboutUsSection() {
    return (
        <section className="w-full bg-stone-50 py-24">
            <div className="container mx-auto flex flex-col xl:flex-row justify-around">
                <AsideTitle title="O nama" description="Zašto odabrati Odvjetnički ured Baković"/>

                <article className="w-full xl:w-3/5 px-8 text-base font-medium text-stone-700 tracking-wide leading-9">
                    Odvjetnički ured Baković osnovan je ____ godine u Tomislavgradu i pruža odvjetničke usluge stranim i
                    domaćim klijentima iz gotovo svih područja prava. Ured je specijaliziran za zastupanje domaćih i
                    stranih trgovačkih društava u područjima trgovačkog prava, prava društava i ugovornog prava te
                    pružamo kompletnu pravnu podršku u poslovanju.
                    <br/><br/>
                    Drugo područje naše specijalizacije je pravo na nekretninama. Pružamo sve usluge iz područja
                    zemljišnoknjižnog prava i prava na nekretninama od sastavljanja predugovora, kupoprodajnih ugovora,
                    uknjižbe prava vlasništva i sve druge radnje vezane uz nekretnine uključujući i provjeru nekretnine
                    prije kupnje (“due diligence“).
                    <br/><br/>
                    Treće područje naše specijalizacije je zastupanje pred sudovima i upravnim tijelima. Pružamo pravno
                    savjetovanje i zastupanje u parničnim, ovršnim, upravnim i stečajnim postupcima, postupcima
                    osiguranja i upravnim sporovima.
                </article>

            </div>
        </section>
    )
}

export default AboutUsSection