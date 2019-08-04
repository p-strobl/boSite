import React from "react";
import classnames from "classnames";

import "./scss/HeaderNavigation.scss";

import { LinkList } from "./partial/p-001-LinkList";

export function Navigation() {
  return (
    <nav className={classnames("header-navigation")}>
      <LinkList />
    </nav>
  );
}
