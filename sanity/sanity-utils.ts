import {createClient, groq} from "next-sanity";
import clientConfig from "@/sanity/config/client-config";
import {HeaderData} from "@/types/HeaderData";
import imageUrlBuilder from '@sanity/image-url'
import {AboutUsType} from "@/types/AboutUsData";
import {LawCategoryType} from "@/types/LawCategoryData";


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


const builder = imageUrlBuilder(clientConfig)

export function urlFor(source: string) {
    return builder.image(source)
}



