import { Types } from '../types'

const init = {
    donors: []
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