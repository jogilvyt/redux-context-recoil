import Header from "../Header";
import ToDoList from "../ToDoList";
import Form from "../Form";
import useToDos from "../../context/useToDos";

const App = () => {
  const { isLoading } = useToDos();

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
