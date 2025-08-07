import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isDarkMode: false,
    searchTerm: "",
  },
  reducers: {
    changeDarkMode: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
});

export const thunkForSetTheme = createAsyncThunk(
  "countdownTimer/getData",
  (_, thunkApi) => ({
    isDarkMode: thunkApi.getState().search.isDarkMode,
  })
);

export const selectIsDarkMode = (state) => state.search.isDarkMode;
export const selectSearchTerm = (state) => state.search.searchTerm;

export const { changeDarkMode, setSearchTerm, clearSearchTerm } =
  searchSlice.actions;

export default searchSlice.reducer;
