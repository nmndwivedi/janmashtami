import { ActionTypes } from '../Types/action-types'

const init = {
    donors: []
}

const feed = (state = init, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_FEED:
            return state;
        default:
            return state;
    }
}

export default feed;