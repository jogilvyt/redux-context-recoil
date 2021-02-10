import { useState } from "react";

import useToDos from "../../context/useToDos";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { addNewToDo } = useToDos();

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await addNewToDo(inputValue);
    setInputValue("");
    setIsLoading(false);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add a to do"
        className="input"
        value={inputValue}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
};

export default Form;
