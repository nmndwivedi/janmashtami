import { Types } from '../types'

const init = {
    items: []
}

const cart = (state = init, { type, payload }) => {
    switch (type) {
        case Types.SET_CART:
            return state;
        case Types.CLEAR_CART:
            return state;
        default:
            return state;
    }
}

export default cart;