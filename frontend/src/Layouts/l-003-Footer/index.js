import React from "react";
import styles from "./footer.scss";

import { FooterContent } from "../../components/c-004-FooterContent";
import { BoundingBar } from "../../components/c-005-BoundingBar";

export function Footer() {
  return (
    <footer className={`${styles.Footer}`}>
      <FooterContent />
      <BoundingBar />
    </footer>
  );
}
