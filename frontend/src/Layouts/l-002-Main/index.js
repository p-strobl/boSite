import React from "react";
import cx from "classnames";

import "./main.scss";

import { Routes } from "../../routes";

export function Main() {
  return (
    <main className={cx("main")}>
      <Routes />
    </main>
  );
}
