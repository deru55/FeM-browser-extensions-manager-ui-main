import React from "react";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { selectSearchTerm } from "../searchBar/searchBarSlice";

export const loadExtensions = createAsyncThunk(
  "allExtensions/getAllExtensions",
  async () => {
    /* const data = await fetch("/src/mocks/extensions.json"); */
    const data = await fetch("./mocks/extensions.json");
    const json = await data.json();
    return json;
  }
);

const extensionsListSlice = createSlice({
  name: "allExtensions",
  initialState: {
    filter: "All",
    isLoading: false,
    hasError: false,
    extensions: [],
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleActiveInactive: (state, action) => {
      const index = current(state.extensions).findIndex(
        (extension) => extension.id === action.payload
      );

      state.extensions[index].isActive = !state.extensions[index].isActive;
    },
    remove: (state, action) => {
      state.extensions = current(state.extensions).filter(
        (extension) => extension.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadExtensions.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    }),
      builder.addCase(loadExtensions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;

        state.extensions = action.payload;
      }),
      builder.addCase(loadExtensions.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectFilter = (state) => state.allExtensions.filter;
export const selectIsLoading = (state) => state.allExtensions.isLoading;
export const selectHasError = (state) => state.allExtensions.hasError;
export const selectAllExtensions = (state) => state.allExtensions.extensions;
export const selectFilteredAllExtensions = (state) => {
  const searchTerm = selectSearchTerm(state);
  const allExtensions = selectAllExtensions(state);
  const filterTerm = selectFilter(state);

  return allExtensions.filter((extension) => {
    return filterTerm === "All"
      ? extension.name.toLowerCase().includes(searchTerm.toLowerCase())
      : extension.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (filterTerm === "Active" ? extension.isActive : !extension.isActive);
  });
};

export const { changeFilter, toggleActiveInactive, remove } =
  extensionsListSlice.actions;

export default extensionsListSlice.reducer;
