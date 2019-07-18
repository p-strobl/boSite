import React from "react";
import styles from "./header.scss";

import { Navigation } from "../../components/c-003-Navigation";

export function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
