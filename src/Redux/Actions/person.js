import { Types } from '../types'

export const setPerson = (person) => {
    return {
        type: Types.SET_PERSON,
        payload: person
    }
}