import {AboutUsSection, PageHeader} from "@/components";
import {getAboutUsData} from "@/sanity/sanity-utils";
import {Suspense} from 'react';
import AboutLoadingSkeleton from "@/app/about/loading";

async function AboutUsPage() {

    const aboutUsData = await getAboutUsData()

    return (
        <section className="w-full">
            <Suspense fallback={<AboutLoadingSkeleton/>}>
                
                <PageHeader
                    image={aboutUsData.sectionPoster.asset}
                    title="O nama"
                />

                <div className="container mx-auto px-4">

                    <AboutUsSection aboutUsData={aboutUsData}/>
                </div>
            </Suspense>
        </section>
    )
}

export default AboutUsPage