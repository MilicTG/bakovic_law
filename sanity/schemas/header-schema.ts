const dynamicHeader = {
    name: "dynamicHeader",
    title: "Naslovna",
    type: "document",
    fields: [
        {
            name: "headerDescription",
            title: "Opis naslovne",
            type: 'string'
        },
        {
            name: 'gallery',
            type: 'document',
            title: 'Slike naslovne',
            fields: [
                {
                    name: 'images',
                    type: 'array', // supports drag'n'drop of multiple files
                    options: {
                        layout: 'grid'
                    },
                    of: [{
                        type: 'image'
                    }]
                }]
        }
    ]
}

export default dynamicHeader