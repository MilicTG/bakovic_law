import {AboutUsSection, PageHeader} from "@/components";
import {getAboutUsData} from "@/sanity/sanity-utils";

async function AboutUsPage() {

    const aboutUsData = await getAboutUsData()

    return (
        <section className="w-full">
            <PageHeader
                image={aboutUsData.sectionPoster.asset}
                title="O nama"
            />

            <div className="container mx-auto px-4">

                <AboutUsSection aboutUsData={aboutUsData}/>
            </div>
        </section>
    )
}

export default AboutUsPage