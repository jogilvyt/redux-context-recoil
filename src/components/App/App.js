import { useState } from "react";

import { deleteToDo, addToDo } from "../../api";
import Header from "../Header";
import ToDoList from "../ToDoList";
import Form from "../Form";

const App = () => {
  const [toDos, setToDos] = useState([]);

  const handleAddNew = async text => {
    const res = await addToDo(text);
    setToDos(res);
  };

  return (
    <>
      <Header />
      <ToDoList />
      <Form handleSubmit={handleAddNew} />
    </>
  );
};

export default App;
