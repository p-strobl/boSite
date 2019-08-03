import React from "react";

import styles from "./scss/HeaderNavi.scss";

import { LinkList } from "./partial/p-001-LinkList";

export function Navigation() {
  return (
    <nav className={`${styles.HeaderNavi}`}>
      <LinkList />
    </nav>
  );
}
