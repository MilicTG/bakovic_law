import {getAllBlogs} from "@/sanity/sanity-utils";
import {Suspense} from "react";
import BlogLoadingSkeleton from "@/app/blog/loading";
import {StaticHeader} from "@/components";
import blogImage from "../../public/images/img_blog.jpg"
async function BlogPage() {

    const allBlogs = await getAllBlogs()


    return (
        <section className="w-full min-h-screen">
            <Suspense fallback={<BlogLoadingSkeleton/>}>

                <StaticHeader image={blogImage}/>

                <div className="container mx-auto px-4">
                    {allBlogs.map(blog =>
                        <p key={blog._id}>{blog.title}</p>
                    )}
                </div>
            </Suspense>
        </section>
    )
}

export default BlogPage