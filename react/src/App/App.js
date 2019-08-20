import React from "react";
import Class from "classnames";

import "./App.scss";

import { BoundingBar } from "Components/BoundingBar";
import { Header } from "Components/Header";
import { Footer } from "Components/Footer";
import { Main } from "Components/Main";

export function App() {
  return (
    <div className={Class("app")}>
      <Header />
      <BoundingBar />
      <Main />
      <BoundingBar />
      <Footer />
    </div>
  );
}
