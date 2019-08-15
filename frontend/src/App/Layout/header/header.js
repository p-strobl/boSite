import React from "react";
import Class from "classnames";

import "./header.scss";

import { BoundingBar } from "Components/BoundingBar/BoundingBar";
import { Header } from "Components/Header/Header";

export function header() {
  return (
    <header className={Class("header")}>
      <BoundingBar />
      <Header />
    </header>
  );
}
