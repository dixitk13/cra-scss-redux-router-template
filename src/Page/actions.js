import { INCREMENT, DECREASE } from "./actionTypes";

export const incrementAction = () => {
  return {
    type: INCREMENT
  };
};
export const decreaseAction = () => {
  return {
    type: DECREASE
  };
};
