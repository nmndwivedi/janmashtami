import { Types } from '../types'

const init = {
    items: [
        {
            id: 3,
            name: '🏟 Venue',
            image: {
                imageSrc: './Diwali/Venue.jpeg',
                imageAlt: "Reservation of a spacious venue for the event",
            },
            description: `<p>Reservation of a spacious venue for the event</p>`
        },
        {
            id: 2,
            name: '🥧 Prasadam',
            image: {
                imageSrc: './Diwali/Prasadam.jpeg',
                imageAlt: "Delicious vegetarian food prepared and offered to the Lord",
            },
            description: `<p>Delicious vegetarian food prepared and offered to the Lord</p>`
        },
        {
            id: 1,
            name: '🔊 Sound System',
            image: {
                imageSrc: './Diwali/Diyas.jpeg',
                imageAlt: "Sound System for a world class kirtan event",
            },
            description: `<p>Sound System for a world class kirtan event</p>`
        },
        {
            id: 4,
            name: '💐 Flowers',
            image: {
                imageSrc: './Diwali/Flowers.jpeg',
                imageAlt: "Flowers for the Deities and hall decorations",
            },
            description: `<p>Flowers for the Deities and hall decorations</p>`
        },
        {
            id: 0,
            name: '🧩 Miscellaneous',
            image: {
                imageSrc: './Diwali/Misc.jpeg',
                imageAlt: "Items that dont fit in other categories",
            },
            description: `<p>Items that dont fit in other categories</p>`
        }
    ]
}

const catalog = (state = init, { type, payload }) => {
    switch (type) {
        case Types.SET_CATALOG:
            return {...state, items: payload};
        default:
            return state;
    }
}

export default catalog;