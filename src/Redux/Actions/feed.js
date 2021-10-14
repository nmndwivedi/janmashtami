import { Types } from '../types'
import { db, collection, getDocs } from "../../firebase-config";

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