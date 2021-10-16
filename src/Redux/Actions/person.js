import { Types } from '../types'
// import { db, collection, addDoc } from "../../firebase-config";

export const initializePerson = () => {
    const lsData = JSON.parse(localStorage.getItem("person"));

    return {
        type: Types.INITIALIZE_PERSON,
        payload: lsData
    };
}

export const setPerson = (person) => async (dispatch) => {
    //set person in db, set feed item in db, set person in store, set person in ls
    // const personsRef = collection(db, "people");

    // await addDoc(personsRef, person);

    localStorage.setItem("person", JSON.stringify(person));

    return dispatch({
        type: Types.SET_PERSON,
        payload: person
    });
}