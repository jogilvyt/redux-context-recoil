import { v4 as uuid } from "uuid";

let todos = [
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
      todos = [
        ...todos,
        {
          id: uuid(),
          text,
        },
      ];
      resolve(todos);
    }, 1500);
  });

export const deleteToDo = id =>
  new Promise(resolve => {
    todos = todos.filter(todo => todo.id !== id);
    setTimeout(() => {
      resolve(todos);
    }, 1500);
  });
