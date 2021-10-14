import { Types } from "../types";
import { db, collection, getDocs } from "../../firebase-config";

export const fetchProgress = () => async (dispatch) => {
  //fetch from fs
  const progressRef = collection(db, "progress");

  const progressDataRaw = await getDocs(progressRef);
  const progressData = progressDataRaw.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))[0].items;

  dispatch ({
    type: Types.FETCH_PROGRESS,
    payload: progressData,
  });
};

export const updateProgress = (items) => async (dispatch) => {
  //write to fs
  return {
    type: Types.UPDATE_PROGRESS,
    payload: items,
  };
};
