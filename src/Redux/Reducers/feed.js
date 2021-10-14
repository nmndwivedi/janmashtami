import { Types } from '../types'

const init = {
    donors: [
        {
          id: 0,
          name: "Lindsay Walton",
          contributions: [
            {
              item: "Prasadam",
              amount: "€108",
            },
            {
              item: "Prasadam",
              amount: "€108",
            },
            {
              item: "Prasadam",
              amount: "€108",
            },
          ],
        },
        {
          id: 1,
          name: "Lindsay Walton",
          contributions: [
            {
              item: "Prasadam",
              amount: "€108",
            },
          ],
        },
        {
          id: 2,
          name: "Anonymous",
          contributions: [],
        },
        {
          id: 3,
          name: "Anonymous",
          contributions: [],
        },
    ],
}

const feed = (state = init, { type, payload }) => {
    switch (type) {
        case Types.FETCH_FEED:
            return { ...state, donors: payload };
        default:
            return state;
    }
}

export default feed;