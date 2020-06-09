import React, { useState, useEffect } from "react";
import Class from "classnames";

import "~server-assets/images/favicon.png";
import "~assets/fonts";

import "~src/helper/ExpandPrototype";
import { determineIfTouchDevice } from "~src/helper/Utilities";
import { GridLayer } from "~components/GridLayer";
import { BoundingBar } from "~components/BoundingBar";
import { Header } from "~components/Header";
import { Main } from "~components/Main";
import { Footer } from "~components/Footer";
import { MobileNavigation } from "~components/MobileNavigation";


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
      {determineIfTouchDevice() && <MobileNavigation />}
    </div>
  );
}
