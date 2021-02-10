import { selector, atom } from "recoil";

import { getToDos } from "../api";

export const toDosQuery = selector({
  key: "ToDosQuery",
  get: async () => await getToDos(),
});

export const toDosAtom = atom({
  key: "ToDos",
  default: toDosQuery,
});
