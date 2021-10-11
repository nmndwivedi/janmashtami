import { ActionTypes } from '../Types/action-types'

export const setFeed = (donors) => {
    return {
        type: ActionTypes.SET_FEED,
        payload: donors
    }
}