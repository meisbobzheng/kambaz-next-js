import { Module } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { modules } from "../../../Database";
const initialState = {
  modules: modules as Module[],
};
const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }) => {
      const newModule: Module = {
        _id: uuidv4(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule] as Module[];
    },
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter((m: Module) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: Module) =>
        m._id === module._id ? module : m
      ) as Module[];
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as Module[];
    },
  },
});
export const { addModule, deleteModule, updateModule, editModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;
