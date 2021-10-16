import { Types } from '../types'
import { db, collection, getDocs, doc } from "../../firebase-config";

export const fetchFeed = (donors) => async (dispatch) => {
    const feedRef = collection(db, "feed");

    const feedDataRaw = await getDocs(feedRef);
    const feedData = feedDataRaw.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))[0].donors;

    dispatch ({
        type: Types.FETCH_FEED,
        payload: feedData
    });
}

export const setFeed = (newFeed) => async (dispatch) => {
    dispatch({
        type: Types.SET_FEED,
        payload: newFeed
    });
}