import React from "react";
import Class from "classnames";

import "./Headline.scss";

export function Headline() {
  return (
    <div className={Class("Headline")}>
      <div className={Class("Headline__Container")}>
        <h1>boSite's Project</h1>
        <h2>use my little tools as you like ❤️</h2>
      </div>
    </div>
  );
}
