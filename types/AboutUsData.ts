import {PortableTextBlock} from "@sanity/types";

export interface AboutUsType {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    aboutTitle: string
    bioContent: PortableTextBlock[]
    sectionPoster: SectionPoster
    bioPoster: BioPoster
    traditionContent: PortableTextBlock[]
    traditionPoster: TraditionPoster
    _updatedAt: string
}

export interface BioContent {
    _key: string
    _type: string
    children: BioChildren[]
    markDefs: any[]
    style: string
}

export interface BioChildren {
    _key: string
    _type: string
    marks: any[]
    text: string
}

export interface SectionPoster{
    _type: string
    asset: Asset
}

export interface BioPoster {
    _type: string
    asset: Asset
}

export interface Asset {
    _ref: string
    _type: string
}

export interface TraditionPoster {
    _type: string
    asset: Asset
}

