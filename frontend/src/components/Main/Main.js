import React from "react";
import Class from "classnames";

import "./Main.scss";

import { Routes } from "Routes/routes";

export function Main() {
  return (
    <main className={Class("main")}>
      <Routes />
    </main>
  );
}
