import React from "react";
import cx from "classnames";

import "./app.scss";

import { Header } from "../Layout/Header/Header";
import { Main } from "../Layout/Main/Main";
import { Footer } from "../Layout/Footer/Footer";

export function App() {
  return (
    <div className={cx("app")}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
