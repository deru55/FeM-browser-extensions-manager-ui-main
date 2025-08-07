import React from "react";

import "../styles/toggleSwitch.css";

const ToggleSwitch = ({ handleToggleActiveInactive, toggleStatus }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={handleToggleActiveInactive}
        defaultChecked={toggleStatus}
      />
      <span className="slider round" />
    </label>
  );
};

export default ToggleSwitch;
