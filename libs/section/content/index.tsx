import React from "react";
import "./index.css";

export const SectionContent = (props) => {
  return (
    <div className="iSectionContent" style={props.styles ? props.styles : {}}>
      {props.children}
    </div>
  );
};
