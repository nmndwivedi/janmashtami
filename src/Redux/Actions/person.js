import { Types } from '../types'

export const initializePerson = () => {
    const lsData = JSON.parse(localStorage.getItem("person"));

    return {
        type: Types.INITIALIZE_PERSON,
        payload: lsData
    };
}

export const setPerson = (person) => async (dispatch) => {
    localStorage.setItem("person", JSON.stringify(person));

    return dispatch({
        type: Types.SET_PERSON,
        payload: person
    });
}