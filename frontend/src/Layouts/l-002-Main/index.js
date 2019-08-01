import React from "react";
import style from "./main.scss";

import { Routes } from "../../routes";

export function Main() {
  return (
    <main className={`${style.Main}`}>
      <Routes />
    </main>
  );
}
