import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteToDo, addToDo } from "../../api";
import { fetchToDos } from "../../state/actions";
import Header from "../Header";
import ToDoList from "../ToDoList";
import Form from "../Form";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  return (
    <div className="wrapper">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Header />
          <ToDoList />
          <Form />
        </>
      )}
    </div>
  );
};

export default App;
