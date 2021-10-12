import { Types } from '../types'

const init = {
    donors: [
        {
          id: 0,
          name: "Lindsay Walton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
          contributions: [
            {
              item: "Prasadam",
              amt: "€108",
            },
            {
              item: "Prasadam",
              amt: "€108",
            },
            {
              item: "Prasadam",
              amt: "€108",
            },
          ],
        },
        {
          id: 1,
          name: "Lindsay Walton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
          contributions: [
            {
              item: "Prasadam",
              amt: "€108",
            },
          ],
        },
        {
          id: 2,
          name: "Anonymous",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
          contributions: [],
        },
        {
          id: 3,
          name: "Anonymous",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
          contributions: [],
        },
    ],
}

const feed = (state = init, { type, payload }) => {
    switch (type) {
        case Types.SET_FEED:
            return state;
        default:
            return state;
    }
}

export default feed;