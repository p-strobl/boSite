import React from "react";
import uuid from "uuid/v4";

import "./GridBar.scss";

export function GridBar() {
  const uiClasses = {
    gridBar: "GridBar",
  };

  const gridBars = [];

  for (let i = 0; i < 12; i += 1) {
    gridBars.push(<div className={uiClasses.gridBar} key={uuid()} />);
  }

  return gridBars;
}
