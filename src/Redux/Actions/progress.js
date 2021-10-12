import { Types } from '../types'

export const setProgress = (items) => {
    return {
        type: Types.SET_PROGRESS,
        payload: items
    }
}