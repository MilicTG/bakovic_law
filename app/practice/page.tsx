import {getLawCategories} from "@/sanity/sanity-utils";
import {Suspense} from "react";
import {PageHeader, PracticesSection, StaticHeader} from "@/components";
import PracticeLoadingSkeleton from "@/app/practice/loading";
import practiceImage from "@/public/images/img_law_two.jpg";

async function PracticesPage() {

    const lawCategoryData = await getLawCategories()

    return (
        <section className="w-full">
            <Suspense fallback={<PracticeLoadingSkeleton/>}>

                <StaticHeader image={practiceImage}/>

                <div className="container mx-auto px-4">
                    <PracticesSection lawCategory={lawCategoryData}/>
                </div>
            </Suspense>
        </section>
    )
}


export default PracticesPage