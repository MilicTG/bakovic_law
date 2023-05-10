import {getLawCategories} from "@/sanity/sanity-utils";
import {Suspense} from "react";
import {PageHeader, PracticesSection} from "@/components";
import PracticeLoadingSkeleton from "@/app/practice/loading";

async function PracticesPage() {

    const lawCategoryData = await getLawCategories()

    return (
        <section className="w-full">
            <Suspense fallback={<PracticeLoadingSkeleton/>}>

                <PageHeader
                    image={lawCategoryData[0].sectionPoster.asset}
                    title="Pravna područja"
                />

                <div className="container mx-auto px-4">
                    <PracticesSection lawCategory={lawCategoryData}/>
                </div>
            </Suspense>
        </section>
    )
}


export default PracticesPage