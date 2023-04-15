import {ExperienceCard, SectionTitleWithDescription} from "@/components"
import {PencilIcon, BookOpenIcon, BuildingOffice2Icon, UserIcon} from "@heroicons/react/24/outline";

function ExperienceSection() {
    return (
        <section className="w-full bg-law-bck-two px-4 py-24 bg-cover bg-center ">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <SectionTitleWithDescription title="Više od 10 godina iskustva"
                                             description="Uz naše bogato znanje i iskustvo u pravnoj praksi, u mogućnosti smo donositi brze odluke i brzo se prilagođavati novim situacijama i izazovima koje postavlja posao odvjetnika."/>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
                    <ExperienceCard
                        icon={<PencilIcon className="w-14 text-slate-50"/>}
                        title="10+"
                        description="Godine pravnog savjetovanja"
                    />

                    <ExperienceCard
                        icon={<BookOpenIcon className="w-14 text-slate-50"/>}
                        title="20+"
                        description="Pružamo asistenciju u više pravnih područja"
                    />

                    <ExperienceCard
                        icon={<BuildingOffice2Icon className="w-14 text-slate-50"/>}
                        title="30+"
                        description="Poslovnih suradnika"
                    />

                    <ExperienceCard
                        icon={<UserIcon className="w-14 text-slate-50"/>}
                        title="100+"
                        description="Klijenata s povjerenjem"
                    />
                </div>

            </div>

        </section>
    )
}

export default ExperienceSection