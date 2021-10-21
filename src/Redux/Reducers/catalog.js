import { Types } from '../types'

const init = {
    items: [
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
            name: '🪔 Diyas',
            image: {
                imageSrc: './Diwali/Diyas.jpeg',
                imageAlt: "Diyas (ghee lamps) to honour the Deities",
            },
            description: `<p>Diyas (ghee lamps) to honour the Deities</p>`
        },
        {
            id: 0,
            name: '🪞 Deity Shringaar',
            image: {
                imageSrc: './Diwali/Deities 3.jpeg',
                imageAlt: "Ornaments and clothing for the Deities",
            },
            description: `<p>Ornaments and clothing for the Deities</p>`
        },
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
            id: 4,
            name: '💐 Flowers',
            image: {
                imageSrc: './Diwali/Flowers.jpeg',
                imageAlt: "Flowers for the Deities and hall decorations",
            },
            description: `<p>Flowers for the Deities and hall decorations</p>`
        },
        {
            id: 5,
            name: '⛰ Govardhan Puja',
            image: {
                imageSrc: './Diwali/Govardhan 2.jpeg',
                imageAlt: "Govardhan hill preparation for puja offering",
            },
            description: `<p>Govardhan hill preparation for puja offering</p>`
        },
        {
            id: 6,
            name: '🙏🏻 Arati',
            image: {
                imageSrc: './Diwali/Arati.jpeg',
                imageAlt: "Arati offering to the Deities",
            },
            description: `<p>Arati offering to the Deities</p>`
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