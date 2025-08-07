import React from "react";

import RoundedButton from "./RoundedButton";
import ToggleSwitch from "./ToggleSwitch";

const Extension = ({ data, handleToggleActiveInactive, handleRemove }) => {
  return (
    <div id={`${data.id}`} className="extension">
      <img src={data.img} className="extension__img" alt="" />

      <div className="overflow-hidden">
        <h2 className="extension__title | overflow-ellipsis">{data.name}</h2>
        <p className="font-clr-description-extension">{data.description}</p>
      </div>

      <div className="span-2-hor grid-2-cols">
        <RoundedButton className={"btn--remove"} handleRemove={handleRemove}>
          Remove
        </RoundedButton>
        <ToggleSwitch
          handleToggleActiveInactive={handleToggleActiveInactive}
          toggleStatus={data.isActive}
        />
      </div>
    </div>
  );
};

export default Extension;
