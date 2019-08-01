import React from "react";

import style from "./app.scss";

import { Header } from "../Layouts/l-001-Header";
import { Main } from "../Layouts/l-002-Main";
import { Footer } from "../Layouts/l-003-Footer";

export function App() {
  return (
    <div className={`${style.App}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
