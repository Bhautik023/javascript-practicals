import React from "react";

export const DropDown = (props) => {
  return (
    <div>
      <select>
        {props.Data.map((item) => {
          return <option key={item.id}>{item.value}</option>
        })}
      </select>
    </div>
  );
};
