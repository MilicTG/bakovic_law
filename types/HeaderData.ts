export interface HeaderData {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    gallery: Gallery
    headerDescription: string
}

export interface Gallery {
    _type: string
    images: Image[]
}

export interface Image {
    _key: string
    _type: string
    asset: Asset
}

export interface Asset {
    _ref: string
    _type: string
}
