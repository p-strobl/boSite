import React from "react";
import Class from "classnames";

import "./SiteTile.scss";

export function SiteTile() {
  return (
    <div className={Class("SiteTile")}>
      <a className={Class("SiteTile__Anchor")} href="/">
        <img src="http://lorempixel.com/400/400/sports" alt="Image" />
      </a>
    </div>
  );
}
