import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

// Array of alerts. Each alert has an id, msg, and type(success/failure)
const initialState = [];

// Action has type and payload(data)
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
