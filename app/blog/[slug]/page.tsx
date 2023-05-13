'use client'

import {getSpecificBlog} from "@/sanity/sanity-utils";
import React, {Suspense} from "react";
import BlogDetailLoadingSkeleton from "@/app/blog/[slug]/loading";
import {ContactSection, ExperienceSection, PageHeader} from "@/components";
import {PortableText} from "@portabletext/react";

type BlogDetailProps = {
    params: { slug: string }
}

async function BlogDetailPage({params}: BlogDetailProps) {

    const slug = params.slug
    const blog = await getSpecificBlog(slug)


    return (
        <section className="w-full min-h-screen">
            <Suspense fallback={<BlogDetailLoadingSkeleton/>}>

                <PageHeader
                    image={blog.blogImage.asset}
                    title={blog.title}
                />

                <div className="container mx-auto pt-24 mb-20 px-4 xl:px-20 flex flex-col">

                    <div className="text-lg font-base text-stone-700 tracking-wide leading-8">
                        <PortableText
                            value={blog.content}
                            components={
                                {
                                    block: {
                                        normal: ({children}) => <p className="text-stone-700">{children}<br/></p>,
                                        h5: ({children}) => <h5
                                            className="text-stone-700 font-bold text-xl">{children}<br/></h5>,
                                    },
                                    list: {
                                        bullet: ({children}) => <ul
                                            className="text-stone-700 py-10 ml-8 list-disc">{children}<br/></ul>,
                                    }
                                }
                            }
                        />
                    </div>
                </div>

                <ExperienceSection/>
                <ContactSection/>


            </Suspense>
        </section>
    )
}

export default BlogDetailPage