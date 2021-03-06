import { DECREASE, INCREMENT } from "./actionTypes";
const initialState = {
  value: 0
};

function page(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREASE:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

export default page;
