import { Types } from '../types'

const init = {
    items: [
        {
            id: 0,
            progress: 0,
            goal: 500,
        },
        {
            id: 1,
            progress: 0,
            goal: 300,
        },
        {
            id: 2,
            progress: 0,
            goal: 1000,
        },
        {
            id: 3,
            progress: 0,
            goal: 1000,
        },
        {
            id: 4,
            progress: 0,
            goal: 400,
        },
        {
            id: 5,
            progress: 0,
            goal: 400,
        },
        {
            id: 6,
            progress: 0,
            goal: 200,
        },
        {
            id: 7,
            progress: 0,
            goal: 200,
        }
    ]
}

const progress = (state = init, { type, payload }) => {
    switch (type) {
        case Types.SET_PROGRESS:
            return {...state, items: payload};
        default:
            return state;
    }
}

export default progress;