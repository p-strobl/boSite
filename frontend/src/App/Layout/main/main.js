import React from "react";
import Class from "classnames";

import "./main.scss";

import { Routes } from "Routes/routes";

export function main() {
  return (
    <main className={Class("main")}>
      <Routes />
    </main>
  );
}
