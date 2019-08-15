import React from "react";
import Class from "classnames";

import "./footer.scss";

import { Footer } from "Components/Footer/Footer";
import { BoundingBar } from "Components/BoundingBar/BoundingBar";

export function footer() {
  return (
    <footer className={Class("footer")}>
      <Footer />
      <BoundingBar />
    </footer>
  );
}
