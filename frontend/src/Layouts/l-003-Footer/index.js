import React from "react";
import cx from "classnames";

import "./footer.scss";

import { FooterContent } from "../../components/c-004-FooterContent";
import { BoundingBar } from "../../components/c-005-BoundingBar";

export function Footer() {
  return (
    <footer className={cx("footer")}>
      <FooterContent />
      <BoundingBar />
    </footer>
  );
}
