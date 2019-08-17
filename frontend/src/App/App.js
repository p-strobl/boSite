import React from "react";
import Class from "classnames";

import "./App.scss";

import { Header } from "Components/Header";
import { Footer } from "Components/Footer";
import { Main } from "Components/Main";

export function App() {
  return (
    <div className={Class("app")}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
