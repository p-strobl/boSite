import React from "react";
import cx from "classnames";

import "./app.scss";

import { Header } from "../layout/Header/Header";
import { Main } from "../layout/Main/Main";
import { Footer } from "../layout/Footer/Footer";

export function App() {
  return (
    <div className={cx("app")}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
