import React from "react";
import "./index.css";

export const SectionHeader = (props) => {
  return (
    <div className="iSectionHeader" style={props.styles ? props.styles : {}}>
      {props.children}
    </div>
  );
};
