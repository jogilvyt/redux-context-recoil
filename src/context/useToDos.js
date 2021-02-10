import { useContext } from "react";

import { ToDoContext } from "./ToDoProvider";

const useToDos = () => {
  return useContext(ToDoContext);
};

export default useToDos;
