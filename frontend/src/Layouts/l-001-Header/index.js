import React from "react";
import cx from "classnames";

import "./header.scss";

import { BoundingBar } from "../../components/c-005-BoundingBar";
import { Navigation } from "../../components/c-003-Navigation";

export function Header() {
  return (
    <header className={cx("header")}>
      <BoundingBar />
      <Navigation />
    </header>
  );
}
