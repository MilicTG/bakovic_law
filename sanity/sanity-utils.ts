import {createClient, groq} from "next-sanity";
import clientConfig from "@/sanity/config/client-config";
import {HeaderData} from "@/types/HeaderData";
import imageUrlBuilder from '@sanity/image-url'
import {AboutUsType} from "@/types/AboutUsData";
import {LawCategoryType} from "@/types/LawCategoryData";
import {BlogType} from "@/types/BlogData";


export async function getHeaderData(): Promise<HeaderData> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "dynamicHeader"][0]{
          _id,
          _createdAt,
          headerDescription,
            gallery{
              images[]{
                _key,
                asset{
                  _ref
                }
              }
            }
        }`
    )
}

export async function getAboutUsData(): Promise<AboutUsType> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "aboutUs"][0]{
        _id,
        _createdAt,
        aboutTitle,
        sectionPoster {
            asset{
                _ref
               }
            },
        traditionPoster {
            asset{
                _ref
               }
            },
        traditionContent,
        bioPoster {
            asset{
                _ref
               }
            },
        bioContent 
    }`
    )
}

export async function getLawCategories(): Promise<LawCategoryType[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "lawCategory"] {
        _id,
        _createdAt,
        categoryTitle,
        categoryDescription,
        categoryIcon {
            asset{
                _ref
               }
            },
        "slug": slug.current,    
        sectionPoster {
            asset{
                _ref
               }
            },
        categoryContent,
    }`
    )
}

export async function getLawCategory(slug: string): Promise<LawCategoryType> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "lawCategory" && slug.current == $slug][0] {
        _id,
        _createdAt,
        categoryTitle,
        categoryDescription,
        categoryIcon {
            asset{
                _ref
               }
            },    
        "slug": slug.current,    
        sectionPoster {
            asset{
                _ref
               }
            },
        categoryContent,
    }`,
        {slug}
    )
}

export async function getAllBlogs(): Promise<BlogType[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "blog"] {
        _id,
        _createdAt,
        title,
        "slug": slug.current,    
        blogImage {
            asset{
                _ref
               }
            },
        content,
    }`
    )
}

export async function getSpecificBlog(slug: string): Promise<BlogType> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "blog" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,    
        blogImage {
            asset{
                _ref
               }
            },
        content,
    }`,
        {slug}
    )
}


const builder = imageUrlBuilder(clientConfig)

export function urlFor(source: string) {
    return builder.image(source)
}



