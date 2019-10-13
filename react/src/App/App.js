import React, { useState, useEffect } from "react";
import Class from "classnames";

import "~server-assets/images/favicon.png";
import "~assets/fonts";

import "./App.scss";

import { GridLayer } from "~components/GridLayer";
import { BoundingBar } from "~components/BoundingBar";
import { Header } from "~components/Header";
import { Footer } from "~components/Footer";
import { Main } from "~components/Main";

export function App() {
  const [touchDevice, setTouchDevice] = useState(true);

  const isTouchDevice = () => {
    if (
      "ontouchstart" in window ||
      navigator.MaxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    ) {
      setTouchDevice(false);
    }
  };

  useEffect(() => {
    isTouchDevice();
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
