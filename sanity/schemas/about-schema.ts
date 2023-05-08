const aboutUsSchema = {
    name: "aboutUs",
    title: "O nama",
    type: "document",
    fields: [
        {
            name: "aboutTitle",
            title: "O nama",
            type: 'string'
        },
        {
            title: 'Slika pravne tradicije',
            name: 'traditionPoster',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
        },
        {
            name: "traditionContent",
            title: "Sadržaj pravne tradicije",
            type: "array",
            of: [
                {type: "block"}
            ]
        },
        {
            title: 'Slika biografije',
            name: 'bioPoster',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
        },
        {
            name: "bioContent",
            title: "Sadržaj biografije",
            type: "array",
            of: [
                {type: "block"}
            ]
        }
    ]
}

export default aboutUsSchema