import { useRecoilValue } from "recoil";

import { toDosAtom } from "../../recoil";
import ToDoItem from "../ToDoItem";

const ToDoList = () => {
  const toDos = useRecoilValue(toDosAtom);

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
