import React from "react";
import styles from "./main.scss";

import { Routes } from "../../routes";

export function Main() {
  return (
    <main className={`${styles.Main}`}>
      <Routes />
    </main>
  );
}
