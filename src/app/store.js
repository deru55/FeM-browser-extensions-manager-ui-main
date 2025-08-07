import { configureStore } from "@reduxjs/toolkit";

import extensionsListReducer from "../features/extensionsList/extensionsListSlice";
import searchReducer from "../features/searchBar/searchBarSlice";

const store = configureStore({
  reducer: {
    allExtensions: extensionsListReducer,
    search: searchReducer,
  },
});

export default store;
