import { useState } from "react";
import { useRecoilState } from "recoil";

import { toDosAtom } from "../../recoil";
import { addToDo } from "../../api";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, setTodos] = useRecoilState(toDosAtom);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    const res = await addToDo(inputValue);
    setTodos(res);
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
