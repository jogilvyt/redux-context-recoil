import { useState, useRef, useEffect } from "react";

const ToDoItem = ({ item, handleDelete }) => {
  const isMounted = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onDelete = async () => {
    setIsLoading(true);
    await handleDelete(item.id);
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
