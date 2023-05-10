import {PortableTextBlock} from "@sanity/types";

export interface BlogType {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    title: string
    slug: string
    blogImage: BlogImage
    content: PortableTextBlock[]
}

export interface BlogImage {
    _type: string
    asset: Asset
}

export interface Asset {
    _ref: string
    _type: string
}