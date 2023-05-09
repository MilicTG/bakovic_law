import {PracticeCard, SectionTitle} from "@/components";
import {
    HomeModernIcon,
    BriefcaseIcon,
    ClipboardDocumentIcon,
    BuildingLibraryIcon,
    PresentationChartLineIcon,
    ScaleIcon
} from "@heroicons/react/24/outline";
import {LawCategoryType} from "@/types/LawCategoryData";


interface PracticeSectionProps {
    lawCategory: LawCategoryType[]
}

function PracticesSection(props: PracticeSectionProps) {
    return (
        <section
            id="practices"
            className="w-full py-10">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <SectionTitle title="Pravne djelatnosti"/>
                <div className="py-8 mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">

                    {
                        props.lawCategory.map(practice =>
                            <PracticeCard
                                key={practice._id}
                                icon={practice.categoryIcon.asset}
                                title={practice.categoryTitle}
                                description={practice.categoryDescription}
                                slug={practice.slug}
                            />
                        )
                    }

                </div>
            </div>
        </section>
    )
}

export default PracticesSection