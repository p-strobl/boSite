import React from "react";
import Class from "classnames";

import "./main.scss";

import { Routes } from "../../routes/Routes";

export function Main() {
  return (
    <main className={Class("main")}>
      <Routes />
    </main>
  );
}
