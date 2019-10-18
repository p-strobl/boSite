import React, { useState, useEffect } from "react";
import Class from "classnames";

import "~server-assets/images/favicon.png";
import "~assets/fonts";

import { isTouchDevice } from "~src/helper/Utilities";
import { GridLayer } from "~components/GridLayer";
import { BoundingBar } from "~components/BoundingBar";
import { Header } from "~components/Header";
import { Footer } from "~components/Footer";
import { Main } from "~components/Main";

import "./App.scss";

export function App() {
  const [touchDevice, setTouchDevice] = useState(true);

  useEffect(() => {
    setTouchDevice(isTouchDevice());
  }, []);

  return (
    <div className={Class("App", { "no-touch": touchDevice })}>
      <GridLayer />
      <Header />
      <BoundingBar />
      <Main />
      <BoundingBar />
      <Footer />
    </div>
  );
}
