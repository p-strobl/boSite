import React from "react";
import Class from "classnames";

import "./footer.scss";

import { FooterContent } from "../../components/FooterContent/FooterContent";
import { BoundingBar } from "../../components/BoundingBar/BoundingBar";

export function Footer() {
  return (
    <footer className={Class("footer")}>
      <FooterContent />
      <BoundingBar />
    </footer>
  );
}
