import { Types } from '../types'

const init = {
    purchased: false    
}

const purchased = (state = init, { type, payload }) => {
    switch (type) {
        case Types.PURCHASED:
            return {...state, purchased: payload};
        default:
            return state;
    }
}

export default purchased;