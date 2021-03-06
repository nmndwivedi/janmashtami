import { Types } from '../types'

const init = {
    person: {
        name: "",
        email: "",
        tel: "",
        guests: 0,
        anon: false
    }
}

const person = (state = init, { type, payload }) => {
    switch (type) {
        case Types.INITIALIZE_PERSON:
            return { ...state, person: payload };
        case Types.SET_PERSON:
            return { ...state, person: payload };
        default:
            return state;
    }
}

export default person;