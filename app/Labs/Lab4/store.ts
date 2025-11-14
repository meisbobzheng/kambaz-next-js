import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./ReduxExamples/AddRedux/addReducer";
import counterReducer from "./ReduxExamples/CounterRedux/counterReducer";
import helloReducer from "./ReduxExamples/HelloRedux/helloReducer";
import todosReducer from "./ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: { helloReducer, counterReducer, addReducer, todosReducer },
});
export default store;
