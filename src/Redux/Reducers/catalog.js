import { Types } from '../types'

const init = {
    items: [
        {
            id: 0,
            name: '🎠 Ratha',
            image: {
                imageSrc: './Diwali/ratha.jpeg',
                imageAlt: "A Grand Chariot for Jagannath, Baladev and Subhadra Maharani",
            },
            description: `<p>A Grand Chariot for Jagannath, Baladev and Subhadra Maharani</p>`
        },
        {
            id: 1,
            name: '🎙 Stage',
            image: {
                imageSrc: './Diwali/stage.jpeg',
                imageAlt: "Stage for performances, seating for guests, tents and transportation costs",
            },
            description: `<p>Stage for performances, seating for guests, tents and transportation costs</p>`
        },
        {
            id: 2,
            name: '🏟 Venue',
            image: {
                imageSrc: './Diwali/Venue.jpeg',
                imageAlt: "Reservation of a spacious venue for the event",
            },
            description: `<p>Reservation of a spacious venue for the event</p>`
        },
        {
            id: 3,
            name: '🪞 Deities Shringaar',
            image: {
                imageSrc: './Diwali/Deities.jpeg',
                imageAlt: "Decorations and travel for Deities from Radhadesh",
            },
            description: `<p>Decorations and travel for Deities from Radhadesh</p>`
        },
        {
            id: 4,
            name: '🥧 Prasadam',
            image: {
                imageSrc: './Diwali/Prasadam.jpeg',
                imageAlt: "Serving delicious vegetarian food (Jagannath's Prasad) to close to 5000 people on Dam Square",
            },
            description: `<p>Serving delicious vegetarian food (Jagannath's Prasad) to close to 5000 people on Dam Square</p>`
        },
        {
            id: 5,
            name: '🔊 Sound System',
            image: {
                imageSrc: './Diwali/ss.jpeg',
                imageAlt: "Sound System for a world class kirtan event",
            },
            description: `<p>Sound System for a world class kirtan event</p>`
        },
        {
            id: 6,
            name: '💐 Flowers',
            image: {
                imageSrc: './Diwali/Flowers.jpeg',
                imageAlt: "Flowers for the Deities and hall decorations",
            },
            description: `<p>Flowers for the Deities and hall decorations</p>`
        },
        {
            id: 7,
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