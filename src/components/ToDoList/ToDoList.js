import ToDoItem from "../ToDoItem";

import useToDos from "../../context/useToDos";

const ToDoList = () => {
  const { toDos } = useToDos();
  console.log("toDos", toDos);

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
