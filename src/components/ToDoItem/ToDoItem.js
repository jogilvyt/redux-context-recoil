import { useState, useRef, useEffect } from "react";

import useToDos from "../../context/useToDos";

const ToDoItem = ({ item }) => {
  const isMounted = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const { removeToDo } = useToDos();

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onDelete = async () => {
    setIsLoading(true);
    await removeToDo(item.id);
    if (isMounted.current) {
      setIsLoading(false);
    }
  };

  return (
    <li className="list-item">
      <span>{item.text}</span>
      {isLoading ? "Deleting..." : <button onClick={onDelete}>Delete</button>}
    </li>
  );
};

export default ToDoItem;
