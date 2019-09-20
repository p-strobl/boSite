import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Class from "classnames";

import { GridBar } from "./GridBar";

import "./GridLayer.scss";

export function GridLayer() {
  const [gridLayer, setGridLayer] = useState("");

  useEffect(() => {
    setGridLayer(document.querySelector(".GridLayer"));
  });

  const hideGrid = (event) => {
    event.currentTarget.classList.remove("GridLayer--show");
  };

  const Grid = (
    <div
      className={Class("GridLayer GridLayer--show")}
      onClick={hideGrid}
      role="presentation">
      <GridBar />
    </div>
  );

  window.addGrid = () => {
    gridLayer.classList.add("GridLayer--show");
  };

  return ReactDOM.createPortal(Grid, document.getElementById("root"));
}
