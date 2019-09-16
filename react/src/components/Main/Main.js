import React from "react";
import Class from "classnames";

import "./Main.scss";

import { Routes } from "~routes/routes";
import { Headline } from "~components/Headline";

export function Main() {
  return (
    <main className={Class("Main")}>
      <Headline />
      <Routes />
    </main>
  );
}
