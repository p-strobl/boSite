import React from "react";
import Class from "classnames";

import "./app.scss";

import { Header } from "Components/Header/Header";
import { main } from "./Layout/main/main";
import { footer } from "./Layout/footer/footer";

export function App() {
  return (
    <div className={Class("app")}>
      <Header />
      <main />
      <footer />
    </div>
  );
}
