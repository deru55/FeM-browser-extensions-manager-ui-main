import React from "react";

import "../../styles/extensionsList.css";

import Spinner from "../../components/Spinner";
import Extension from "../../components/Extension";
import RoundedButton from "../../components/RoundedButton";

const ExtensionsList = ({
  filter,
  isLoading,
  allExtensions,
  handleChangeFilter,
  handleToggleActiveInactive,
  handleRemove,
}) => {
  return (
    <div className="extensions-list">
      <div className="grid-2-cols grid-2-rows padding-block">
        <h1>Extensions List</h1>

        <div id="filter-options" className="filter-options">
          <RoundedButton
            className="btn--filter"
            handleChangeFilter={handleChangeFilter}
            filter={filter}
            filterValue="All"
          >
            All
          </RoundedButton>
          <RoundedButton
            className="btn--filter"
            handleChangeFilter={handleChangeFilter}
            filter={filter}
            filterValue="Active"
          >
            Active
          </RoundedButton>
          <RoundedButton
            className="btn--filter"
            handleChangeFilter={handleChangeFilter}
            filter={filter}
            filterValue="Inactive"
          >
            Inactive
          </RoundedButton>
        </div>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="extensions-container">
          {allExtensions.map((extension) => (
            <Extension
              data={extension}
              key={`key-${extension.id}`}
              handleToggleActiveInactive={handleToggleActiveInactive}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExtensionsList;
