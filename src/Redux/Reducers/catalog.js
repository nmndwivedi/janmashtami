import { Types } from '../types'

const init = {
    items: []
}

const catalog = (state = init, { type, payload }) => {
    switch (type) {
        case Types.SET_CATALOG:
            return state;
        default:
            return state;
    }
}

export default catalog;