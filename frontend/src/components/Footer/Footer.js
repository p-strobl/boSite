import React from "react";
import Class from "classnames";

import { BoundingBar } from "Components/BoundingBar";

import "./Footer.scss";

export function Footer() {
  return (
    <footer className={Class("footer")}>
      <BoundingBar />
      <div>Footer Content</div>
    </footer>
  );
}
