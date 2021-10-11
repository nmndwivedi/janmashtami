import { Types } from '../types'

export const setCatalog = (items) => {
    return {
        type: Types.SET_CATALOG,
        payload: items
    }
}