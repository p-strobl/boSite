import React from "react";
import Class from "classnames";

import "./Main.scss";

import { Routes } from "~routes/routes";

export function Main() {
  return (
    <main className={Class("main")}>
      <Routes />
    </main>
  );
}
