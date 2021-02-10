import { useSelector } from "react-redux";

import ToDoItem from "../ToDoItem";

const ToDoList = () => {
  const toDos = useSelector(state => state.items);

  return (
    <ul className="list">
      {toDos.length ? (
        toDos.map(item => <ToDoItem item={item} key={item.id} />)
      ) : (
        <p>There is nothing left to do!</p>
      )}
    </ul>
  );
};

export default ToDoList;
