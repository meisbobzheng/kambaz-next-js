import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import coursesReducer from "./Courses/reducer";
import enrollmentsReducer from "./Enrollments/reducer";

const store = configureStore({
  reducer: {
    coursesReducer,
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer,
  },
});
export default store;
