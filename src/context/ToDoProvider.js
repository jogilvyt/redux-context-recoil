import { createContext, useState, useEffect } from "react";

import { getToDos, deleteToDo, addToDo } from "../api";

export const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const fetchToDos = async () => {
      const res = await getToDos();
      setToDos(res);
      setIsLoading(false);
    };

    fetchToDos();
  }, []);

  const addNewToDo = async text => {
    const res = await addToDo(text);
    setToDos(res);
  };

  const removeToDo = async id => {
    const res = await deleteToDo(id);
    setToDos(res);
  };

  const contextValue = {
    isLoading,
    toDos,
    addNewToDo,
    removeToDo,
  };

  return (
    <ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>
  );
};

export default ToDoProvider;
