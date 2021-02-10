import { UPDATE_TODOS, SET_IS_LOADING } from "./types";

const initialState = {
  items: [],
  isLoading: true,
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case UPDATE_TODOS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default toDoReducer;
