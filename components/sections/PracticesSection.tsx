import {PracticeCard, SectionTitle} from "@/components";
import {HomeModernIcon, BriefcaseIcon, ClipboardDocumentIcon, BuildingLibraryIcon, PresentationChartLineIcon, ScaleIcon} from "@heroicons/react/24/outline";

function PracticesSection() {
    return (
        <section className="w-full py-10">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <SectionTitle title="Pravne djelatnosti"/>
                <div className="py-8 mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
                    <PracticeCard
                        icon={<HomeModernIcon className="w-20 text-primary-color"/>}
                        title="Nekretnine"
                        description="Pravno savjetovanje i zastupanje u postupcima vezano za promet nekretnina i upisa u zemljišne knjige (upis vlasništva, etažnog vlasništva, hipoteka, služnosti i sl.)."
                    />
                    <PracticeCard
                        icon={<BriefcaseIcon className="w-20 text-primary-color"/>}
                        title="Trgovačko pravo"
                        description="Sastavljanje i analiza ugovora pravno savjetovanje i zastupanje stranaka u sklapanju pravnih poslova"
                    />
                    <PracticeCard
                        icon={<ClipboardDocumentIcon className="w-20 text-primary-color"/>}
                        title="Trgovačka društava"
                        description="Pravno savjetovanje i zastupanje vezano za osnivanje trgovačkih društava sastavljanje statuta i društvenih ugovora i drugih pravih akata društava"
                    />
                    <PracticeCard
                        icon={<BuildingLibraryIcon className="w-20 text-primary-color"/>}
                        title="Zastupanje pred sudovima"
                        description="Pravno savjetovanje i zastupanje u parničnim i ovršnim postupcima, postupcima osiguranja te zastupanje u upravnim postupcima."
                    />
                    <PracticeCard
                        icon={<ScaleIcon className="w-20 text-primary-color"/>}
                        title="Obvezno pravo"
                        description="Pravno savjetovanje i zastupanje iz područja obveznog prava; pravno savjetovanje prilikom pregovora oko sklapanja ugovora"
                    />
                    <PracticeCard
                        icon={<PresentationChartLineIcon className="w-20 text-primary-color"/>}
                        title="Radno pravo"
                        description="Pravno  savjetovanje i zastupanje u slučaju otkaza ugovora o radu kao i drugim slučajevima prestanka radnog odnosa."
                    />
                </div>
            </div>
        </section>
    )
}

export default PracticesSection