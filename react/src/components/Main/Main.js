import React from "react";
import { RecoilRoot } from "recoil";
import Class from "classnames";

import "./Main.scss";

import { Routes } from "~routes/routes";

export function Main() {
  return (
    <RecoilRoot>
      <main className={Class("Main")}>
        <Routes />
      </main>
    </RecoilRoot>
  );
}
