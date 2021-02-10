import { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";

import { toDosAtom } from "../../recoil";
import { deleteToDo } from "../../api";

const ToDoItem = ({ item }) => {
  const isMounted = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [, setTodos] = useRecoilState(toDosAtom);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onDelete = async () => {
    setIsLoading(true);
    const res = await deleteToDo(item.id);
    setTodos(res);
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
