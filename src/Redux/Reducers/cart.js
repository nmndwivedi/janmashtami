import { Types } from '../types'

const init = {
    items: []
}

const cart = (state = init, { type, payload }) => {
    switch (type) {
        case Types.UPDATE_CART:
            return { ...state, items: payload };
        case Types.INITIALIZE_CART:
            return { ...state, items: payload };
        case Types.CLEAR_CART:
            return { ...state, items: [] };
        default:
            return state;
    }
}

export default cart;