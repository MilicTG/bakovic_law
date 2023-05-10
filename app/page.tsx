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
    description: "Dobrodošli na stranicu našeg odvjetničkog ureda. Pružamo visokokvalitetne pravne usluge i brinemo o vašim pravima i interesima."
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
