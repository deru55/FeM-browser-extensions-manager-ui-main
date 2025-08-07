import React from "react";

const RoundedButton = ({
  children,
  className,
  filter,
  filterValue,
  handleChangeFilter,
  handleRemove,
}) => {
  return (
    <button
      className={`rounded-border${className ? ` ${className}` : ""}${
        filter && filterValue && filter === filterValue
          ? " selected-filter"
          : ""
      }`}
      onClick={handleChangeFilter || handleRemove}
      value={filterValue}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
