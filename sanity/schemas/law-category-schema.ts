const lawCategorySchema = {
    name: "lawCategory",
    title: "Pravne djelatnosti",
    type: "document",
    fields: [
        {
            name: "categoryTitle",
            title: "Naslov djelatnosti",
            type: 'string'
        },
        {
            name: 'categoryIcon',
            title: 'Ikona djelatnosti',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
        },
        {
            name: "categoryDescription",
            title: "Kratki opis djelatnosti",
            type: 'string'
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "categoryTitle",
                maxLength: 96
            }
        },
        {
            title: 'Naslovna slika',
            name: 'sectionPoster',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
        },
        {
            name: "categoryContent",
            title: "Sadržaj pravne djelatnosti",
            type: "array",
            of: [
                {type: "block"}
            ]
        },
    ]
}

export default lawCategorySchema