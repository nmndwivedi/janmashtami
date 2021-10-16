import { Types } from "../types";

export const purchased = (val) => {
  localStorage.setItem("purchased", val);

  return {
    type: Types.PURCHASED,
    payload: val,
  };
};
