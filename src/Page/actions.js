import { INCREMENT, DECREASE, RECEIVE_DATA, REQUEST_DATA } from "./actionTypes";

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

export const requestData = () => {
  return {
    type: REQUEST_DATA
  };
};

export const receiveData = () => {
  return {
    type: RECEIVE_DATA
  };
};

export const fetchData = id => async dispatch => {
  dispatch(requestData());

  try {
    const res = await fetch(`/api/resource`);
    const json = await res.json();
    dispatch(receiveData(json));
  } catch (e) {
    console.log("Error", e);
  }
};
