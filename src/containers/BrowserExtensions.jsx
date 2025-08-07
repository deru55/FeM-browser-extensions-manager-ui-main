import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../features/searchBar/SearchBar";
import ExtensionsList from "../features/extensionsList/ExtensionsList";
import {
  selectIsDarkMode,
  selectSearchTerm,
  changeDarkMode,
  setSearchTerm,
  clearSearchTerm,
  thunkForSetTheme,
} from "../features/searchBar/searchBarSlice";
import {
  loadExtensions,
  selectFilter,
  selectFilteredAllExtensions,
  selectIsLoading,
  selectHasError,
  changeFilter,
  toggleActiveInactive,
  remove,
} from "../features/extensionsList/extensionsListSlice";
import Error from "../components/Error";

const BrowserExtensions = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const searchTerm = useSelector(selectSearchTerm);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const hasError = useSelector(selectHasError);
  const allExtensions = useSelector(selectFilteredAllExtensions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadExtensions());
  }, []);

  /* useEffect(() => {
    const filterContainer = document.querySelector(".filter-options");
    const btns = filterContainer.querySelectorAll("button.rounded-btn");

    for (let btn of btns) {
      btn.classList.remove("selected-filter");
    }

    document
      .getElementById(`btn-filter-${filter}`)
      .classList.add("selected-filter");
  }, [filter]); */

  const handleToggleTheme = () => {
    dispatch(changeDarkMode());

    dispatch(thunkForSetTheme()).then((data) => {
      const body = document.body;

      if (data.payload.isDarkMode) {
        body.classList.add("dark-theme");
      } else {
        body.classList.remove("dark-theme");
      }
    });
  };

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const onSearchTermClearHandler = () => {
    dispatch(clearSearchTerm());
  };

  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  const handleToggleActiveInactive = (e) => {
    dispatch(toggleActiveInactive(e.currentTarget.closest(".extension").id));
  };

  const handleRemove = (e) => {
    dispatch(remove(e.currentTarget.closest(".extension").id));
  };

  return (
    <>
      <header>
        <SearchBar
          isDarkMode={isDarkMode}
          searchTerm={searchTerm}
          handleToggleTheme={handleToggleTheme}
          onSearchTermClearHandler={onSearchTermClearHandler}
          onSearchChangeHandler={onSearchChangeHandler}
        />
      </header>

      <main>
        {hasError ? (
          <Error />
        ) : (
          <ExtensionsList
            filter={filter}
            isLoading={isLoading}
            allExtensions={allExtensions}
            handleChangeFilter={handleChangeFilter}
            handleToggleActiveInactive={handleToggleActiveInactive}
            handleRemove={handleRemove}
          />
        )}
      </main>
    </>
  );
};

export default BrowserExtensions;
