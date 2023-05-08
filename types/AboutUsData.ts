export interface AboutUsType {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    aboutTitle: string
    bioContent: BioContent[]
    bioPoster: BioPoster
    traditionContent: TraditionContent[]
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

export interface BioPoster {
    _type: string
    asset: Asset
}

export interface Asset {
    _ref: string
    _type: string
}

export interface TraditionContent {
    _key: string
    _type: string
    children: TraditionChildren[]
    markDefs: any[]
    style: string
}

export interface TraditionChildren {
    _key: string
    _type: string
    marks: any[]
    text: string
}

export interface TraditionPoster {
    _type: string
    asset: Asset
}

