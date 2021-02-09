import { useState, useEffect } from "react";

import { getToDos, deleteToDo, addToDo } from "../../api";
import Header from "../Header";
import ToDoList from "../ToDoList";
import Form from "../Form";

const App = () => {
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

  const handleAddNew = async text => {
    const res = await addToDo(text);
    setToDos(res);
  };

  const handleDelete = async id => {
    const res = await deleteToDo(id);
    setToDos(res);
  };

  return (
    <div className="wrapper">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Header />
          <ToDoList toDos={toDos} handleDelete={handleDelete} />
          <Form handleSubmit={handleAddNew} />
        </>
      )}
    </div>
  );
};

export default App;
