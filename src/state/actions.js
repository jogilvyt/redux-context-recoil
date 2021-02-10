import { getToDos, addToDo, deleteToDo } from "../api";
import { UPDATE_TODOS, SET_IS_LOADING } from "./types";

export const fetchToDos = () => {
  return async dispatch => {
    dispatch({ type: SET_IS_LOADING, payload: true });
    const payload = await getToDos();
    dispatch({ type: UPDATE_TODOS, payload });
    dispatch({ type: SET_IS_LOADING, payload: false });
  };
};

export const addNewTodo = text => {
  return async dispatch => {
    const payload = await addToDo(text);
    dispatch({ type: UPDATE_TODOS, payload });
  };
};

export const removeTodo = id => {
  return async dispatch => {
    const payload = await deleteToDo(id);
    dispatch({ type: UPDATE_TODOS, payload });
  };
};
