import React, { useState, useEffect } from "react";
import Class from "classnames";

import "~server-assets/images/favicon.png";
import "~assets/fonts";

import "~src/helper/ExpandPrototype";
import { isTouchDevice } from "~src/helper/Utilities";
import { GridLayer } from "~components/GridLayer";
import { BoundingBar } from "~components/BoundingBar";
import { Header } from "~components/Header";
import { Main } from "~components/Main";
import { Footer } from "~components/Footer";
import { MobileNavigation } from "~components/MobileNavigation";

import "./App.scss";

export function App() {
  const [ifIsTouchDevice, setIfIsTouchDevice] = useState(true);
  const uiClasses = {
    app: "App",
    noTouch: "no-touch",
  };

  useEffect(() => {
    setIfIsTouchDevice(!isTouchDevice());
  }, []);

  return (
    <div className={Class(uiClasses.app, { [uiClasses.noTouch]: ifIsTouchDevice })}>
      <GridLayer />
      <Header />
      <BoundingBar />
      <Main />
      <BoundingBar />
      <Footer />
      {isTouchDevice() && <MobileNavigation />}
    </div>
  );
}
