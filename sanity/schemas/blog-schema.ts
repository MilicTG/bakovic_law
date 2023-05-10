const blogSchema = {
    name: "blog",
    title: "Stučni članci",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Naslov",
            type: 'string'
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            title: 'Naslovna slika',
            name: 'blogImage',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
        },
        {
            name: "content",
            title: "Sadržaj članka",
            type: "array",
            of: [
                {type: "block"}
            ]
        },
    ]
}

export default blogSchema