import { Types } from '../types'

export const updateCart = (items) => {
    return {
        type: Types.UPDATE_CART,
        payload: items
    }
}

export const clearCart = () => {
    return {
        type: Types.CLEAR_CART
    }
}