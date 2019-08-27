import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import uuidv4 from "uuid/v4";
import Class from "classnames";

import "./GridLayer.scss";

export function GridLayer() {
  const [gridLayer, setGridLayer] = useState("");
  const gridBars = [];

  useEffect(() => {
    setGridLayer(document.querySelector(".grid-layer"));
  });

  const hideGrid = (ev) => {
    ev.currentTarget.classList.remove("show");
  };

  window.addGrid = () => {
    gridLayer.classList.add("show");
  };

  for (let i = 0; i < 12; i += 1) {
    gridBars.push(<div className={Class("grid-bar")} key={uuidv4()}></div>);
  }

  const Grid = (
    <div
      className={Class("grid-layer show")}
      onClick={hideGrid}
      role="presentation">
      {gridBars}
    </div>
  );

  return ReactDOM.createPortal(Grid, document.getElementById("root"));
}
