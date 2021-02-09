import { v4 as uuid } from "uuid";

const todos = [
  {
    id: uuid(),
    text: "Empty the bin",
  },
  {
    id: uuid(),
    text: "Take out the trash",
  },
  {
    id: uuid(),
    text: "Vide la poubelle",
  },
];

export const getToDos = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(todos);
    }, 1500);
  });

export const addToDo = text =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve([
        ...todos,
        {
          id: uuid(),
          text,
        },
      ]);
    }, 1500);
  });

export const deleteToDo = id =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(todos.filter(todo => todo.id !== id));
    }, 1500);
  });
