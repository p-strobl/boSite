import React, { useState, useEffect } from "react";
import Class from "classnames";

import "~server-assets/images/favicon.png";
import "~assets/fonts";

import { determineIfTouchDevice } from "~src/helper/Utilities";
import { GridLayer } from "~components/GridLayer";
import { BoundingBar } from "~components/BoundingBar";
import { Header } from "~components/Header";
import { Footer } from "~components/Footer";
import { Main } from "~components/Main";

import "./App.scss";

export function App() {
  const [ifIsTouchDevice, setIfIsTouchDevice] = useState(true);

  useEffect(() => {
    setIfIsTouchDevice(determineIfTouchDevice());
  }, []);

  return (
    <div className={Class("App", { "no-touch": ifIsTouchDevice })}>
      <GridLayer />
      <Header />
      <BoundingBar />
      <Main />
      <BoundingBar />
      <Footer />
    </div>
  );
}
