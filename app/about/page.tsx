import {PageHeader} from "@/components";
import {getAboutUsData} from "@/sanity/sanity-utils";

async function AboutUsPage() {

    const aboutUsData = await getAboutUsData()

    return (
        <section className="w-full">
            <PageHeader/>

            <div className="container mx-auto px-8 xl:px-4 h-[8000px]">

            </div>
        </section>
    )
}

export default AboutUsPage