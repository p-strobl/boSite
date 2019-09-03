import React from "react";
import uuidv4 from "uuid/v4";
import Class from "classnames";

import "./GridBar.scss";

export function GridBar() {
  const gridBars = [];

  for (let i = 0; i < 12; i += 1) {
    gridBars.push(
      <div className={Class("GridBar")} key={uuidv4()}>
        Grid {i + 1}
      </div>,
    );
  }

  return gridBars;
}
