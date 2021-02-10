import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { removeTodo } from "../../state/actions";

const ToDoItem = ({ item }) => {
  const isMounted = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onDelete = async () => {
    setIsLoading(true);
    await dispatch(removeTodo(item.id));
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
