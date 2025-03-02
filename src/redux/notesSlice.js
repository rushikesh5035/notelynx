import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import toast from "react-hot-toast";

const initialState = {
  notes: (() => {
    try {
      return JSON.parse(localStorage.getItem("notes")) || [];
    } catch {
      return [];
    }
  })(),
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addToNotes: (state, action) => {
      const note = action.payload;
      state.notes.push(note);
      localStorage.setItem("notes", JSON.stringify(state.notes));
      toast.success("Note Created Successfully!");
    },
    updateToNotes: (state, action) => {
      const note = action.payload;
      const index = state.notes.findIndex((item) => item._id === note._id);
      if (index >= 0) {
        state.notes[index] = note;
        localStorage.setItem("notes", JSON.stringify(state.notes));
        toast.success("Notes Updated");
      }
    },
    resetAllNotes: (state, action) => {
      state.notes = [];
      localStorage.removeItem("notes");
    },
    removeFromNotes: (state, action) => {},
  },
});

export const { addToNotes, updateToNotes, resetAllNotes, removeFromNotes } =
  notesSlice.actions;

export default notesSlice.reducer;
