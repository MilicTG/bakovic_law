import {getLawCategory} from "@/sanity/sanity-utils";
import {ContactSection, ExperienceSection, PageHeader} from "@/components";
import {PortableText} from "@portabletext/react";
import React from "react";

type PracticeProps = {
    params: { slug: string }
}

async function PracticePage({params}: PracticeProps) {

    const slug = params.slug
    const category = await getLawCategory(slug)

    return (
        <section className="w-full min-h-screen">

            <PageHeader
                image={category.sectionPoster.asset}
                title={category.categoryTitle}
            />

           <div className="container mx-auto pt-24 mb-20 px-4 xl:px-20 flex flex-col">

               <div className="text-lg font-medium text-stone-700 tracking-wide leading-8">
                   <PortableText
                       value={category.categoryContent}
                       components={
                           {
                               block: {
                                   normal: ({children}) => <p className="text-stone-700">{children}<br/></p>,
                                   h5:({children}) => <h5 className="text-stone-700 font-bold text-xl">{children}<br/></h5>,
                               },
                               list: {
                                   bullet: ({children}) => <ul className="text-stone-700 py-10 ml-8 list-disc">{children}<br/></ul>,
                               }
                           }
                       }
                   />
               </div>
           </div>

            <ExperienceSection/>
            <ContactSection/>

        </section>
    )
}

export default PracticePage