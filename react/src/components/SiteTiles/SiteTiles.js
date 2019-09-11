import React from "react";
import Class from "classnames";

import { SiteTile } from "./SiteTile";

import "./SiteTiles.scss";

export function SiteTiles() {
  return (
    <div className={Class("SiteTiles")}>
      <SiteTile />
    </div>
  );
}
