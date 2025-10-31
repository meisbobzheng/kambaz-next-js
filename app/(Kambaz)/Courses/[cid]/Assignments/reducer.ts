import { Assignment } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { assignments } from "../../../Database";
const initialState = {
  assignments: assignments as Assignment[],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: Assignment = {
        _id: uuidv4(),
        title: assignment.title,
        description: assignment.description,
        course: assignment.course,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableFrom: assignment.availableFrom,
      };
      state.assignments = [...state.assignments, newAssignment] as Assignment[];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: Assignment) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: Assignment) =>
        a._id === assignment._id ? assignment : a
      ) as Assignment[];
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
