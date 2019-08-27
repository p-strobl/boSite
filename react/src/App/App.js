import React from "react";
import Class from "classnames";

import "./App.scss";

import { GridLayer } from "~components/GridLayer";

import { BoundingBar } from "~components/BoundingBar";
import { Header } from "~components/Header";
import { Footer } from "~components/Footer";
import { Main } from "~components/Main";

export function App() {
  return (
    <div className={Class("app")}>
      <GridLayer />
      <Header />
      <BoundingBar />
      <Main />
      <BoundingBar />
      <Footer />
    </div>
  );
}
