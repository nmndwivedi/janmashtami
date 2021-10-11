import { ActionTypes } from '../Types/action-types'

const init = {
    items: []
}

const cart = (state = init, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CART:
            return state;
        case ActionTypes.CLEAR_CART:
            return state;
        default:
            return state;
    }
}

export default cart;