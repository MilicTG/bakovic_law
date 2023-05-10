import {
    DynamicHeader,
    PracticesSection,
    ExperienceSection,
    ContactSection,
} from "@/components";
import {Suspense} from 'react';
import {getHeaderData, getLawCategories} from "@/sanity/sanity-utils";
import HomeLoadingSkeleton from "@/app/loading";

export const metadata = {
    title: 'Odvjetnik Frano Baković',
};

export default async function Home() {

    const headerData = await getHeaderData();
    const lawCategoryData = await getLawCategories()

    return (
        <main className="w-full">
            <Suspense fallback={<HomeLoadingSkeleton/>}>
                <DynamicHeader title={headerData.headerDescription} images={headerData.gallery.images}/>
                {/*<PracticesSection lawCategory={lawCategoryData}/>*/}
                {/*<ExperienceSection/>*/}
                {/*<ContactSection/>*/}
            </Suspense>
        </main>
    )
}
