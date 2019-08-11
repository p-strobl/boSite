import React from "react";
import cx from "classnames";

import "./app.scss";

import { Header } from "../Layouts/l-001-Header";
import { Main } from "../Layouts/l-002-Main";
import { Footer } from "../Layouts/l-003-Footer";

export function App() {
  return (
    <div className={cx("app")}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
