import {PortableTextBlock} from "@sanity/types";

export interface LawCategoryType {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    categoryContent: PortableTextBlock[]
    categoryDescription: string
    categoryIcon: CategoryIcon
    categoryTitle: string
    sectionPoster: SectionPoster
    order: number
    slug: string
}

export interface CategoryIcon {
    _type: string
    asset: Asset
}

export interface Asset {
    _ref: string
    _type: string
}

export interface SectionPoster {
    _type: string
    asset: Asset
}
