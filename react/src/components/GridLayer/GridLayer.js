import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Class from "classnames";

import { GridBar } from "./GridBar";

import "./GridLayer.scss";

export function GridLayer() {
  const [gridLayer, setGridLayer] = useState("");

  useEffect(() => {
    setGridLayer(document.querySelector(".grid-layer"));
  });

  const hideGrid = (ev) => {
    ev.currentTarget.classList.remove("show");
  };

  const Grid = (
    <div
      className={Class("grid-layer show")}
      onClick={hideGrid}
      role="presentation">
      <GridBar />
    </div>
  );

  window.addGrid = () => {
    gridLayer.classList.add("show");
  };

  return ReactDOM.createPortal(Grid, document.getElementById("root"));
}
