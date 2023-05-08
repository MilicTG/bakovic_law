import {
    DynamicHeader,
    PracticesSection,
    ExperienceSection,
    ContactSection,
} from "@/components";
import {getHeaderData} from "@/sanity/sanity-utils";

export const metadata = {
    title: 'Odvjetnik Frano Baković',
};

export default async function Home() {

    const headerData = await getHeaderData();

    return (
        <main className="w-full">
            <DynamicHeader title={headerData.headerDescription} images={headerData.gallery.images}/>
            {/*<PracticesSection/>*/}
            {/*<ExperienceSection/>*/}
            {/*<ContactSection/>*/}
        </main>
    )
}
