import {
    DynamicHeader,
    PracticesSection,
    ExperienceSection,
    ContactSection,
} from "@/components";
import {getHeaderData, getLawCategories} from "@/sanity/sanity-utils";

export const metadata = {
    title: 'Odvjetnik Frano Baković',
};

export default async function Home() {

    const headerData = await getHeaderData();
    const lawCategoryData = await getLawCategories()

    return (
        <main className="w-full">
            <DynamicHeader title={headerData.headerDescription} images={headerData.gallery.images}/>
            {/*<PracticesSection lawCategory={lawCategoryData}/>*/}
            {/*<ExperienceSection/>*/}
            {/*<ContactSection/>*/}
        </main>
    )
}
