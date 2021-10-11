import { ActionTypes } from '../Types/action-types'

export const setCart = (items) => {
    return {
        type: ActionTypes.SET_CART,
        payload: items
    }
}

export const clearCart = () => {
    return {
        type: ActionTypes.CLEAR_CART
    }
}