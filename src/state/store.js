import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./toDoReducer";

export default createStore(reducers, applyMiddleware(thunk));
