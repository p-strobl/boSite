import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { GridBar } from "./GridBar";

import "./GridLayer.scss";

export function GridLayer() {
  const [gridLayer, setGridLayer] = useState("");
  const uiClasses = {
    root: "root",
    gridLayer: "GridLayer",
    gridLayerShow: "GridLayer--show",
  };

  useEffect(() => {
    setGridLayer(document.querySelector(`.${uiClasses.gridLayer}`));
  });

  const hideGrid = (event) => {
    event.currentTarget.classList.remove(`${uiClasses.gridLayerShow}`);
  };

  const Grid = (
    <div className={uiClasses.gridLayer} onClick={hideGrid} role="presentation">
      <GridBar />
    </div>
  );

  window.addGrid = () => {
    gridLayer.classList.add(`${uiClasses.gridLayerShow}`);
  };

  return ReactDOM.createPortal(Grid, document.getElementById(`${uiClasses.root}`));
}
