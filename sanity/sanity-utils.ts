import {createClient, groq} from "next-sanity";
import clientConfig from "@/sanity/config/client-config";
import {HeaderData} from "@/types/HeaderData";
import imageUrlBuilder from '@sanity/image-url'


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



const builder = imageUrlBuilder(clientConfig)

export function urlFor(source: string) {
    return builder.image(source)
}



