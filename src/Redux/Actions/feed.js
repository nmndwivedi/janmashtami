import { Types } from '../types'

export const setFeed = (donors) => {
    return {
        type: Types.SET_FEED,
        payload: donors
    }
}