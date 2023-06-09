import {getAllBlogs} from "@/sanity/sanity-utils";
import {Suspense} from "react";
import BlogLoadingSkeleton from "@/app/blog/loading";
import {BlogCard, SectionTitle, StaticHeader} from "@/components";
import blogImage from "@/public/images/img_blog.jpg"

async function BlogPage() {

    const allBlogs = await getAllBlogs()

    return (
        <section className="w-full min-h-screen">
            <Suspense fallback={<BlogLoadingSkeleton/>}>

                <StaticHeader image={blogImage}/>

                <div
                    className="container mx-auto px-4 py-12 xl:py-20 flex flex-col items-center justify-center">

                    <SectionTitle title="Stručna publikacija"/>

                    <div className="w-full grid grid-cols-1 py-20 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
                        {allBlogs.map(blog =>
                            <BlogCard
                                title={blog.title}
                                image={blog.blogImage.asset}
                                slug={blog.slug}
                                key={blog._id}
                            />
                        )}
                    </div>


                </div>
            </Suspense>
        </section>
    )
}

export default BlogPage
export const revalidate = 60; // revalidate this page every 60 seconds