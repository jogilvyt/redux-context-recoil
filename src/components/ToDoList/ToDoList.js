import ToDoItem from "../ToDoItem";

const ToDoList = ({ toDos, handleDelete }) => {
  return (
    <ul className="list">
      {toDos.length ? (
        toDos.map(item => (
          <ToDoItem item={item} handleDelete={handleDelete} key={item.id} />
        ))
      ) : (
        <p>There is nothing left to do!</p>
      )}
    </ul>
  );
};

export default ToDoList;
