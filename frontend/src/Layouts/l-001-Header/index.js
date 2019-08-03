import React from "react";
import styles from "./header.scss";

import { BoundingBar } from "../../components/c-005-BoundingBar";
import { Navigation } from "../../components/c-003-Navigation";

export function Header() {
  return (
    <header className={`${styles.Header}`}>
      <BoundingBar />
      <Navigation />
    </header>
  );
}
