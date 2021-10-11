import { Types } from '../types'

export const setCart = (items) => {
    return {
        type: Types.SET_CART,
        payload: items
    }
}

export const clearCart = () => {
    return {
        type: Types.CLEAR_CART
    }
}