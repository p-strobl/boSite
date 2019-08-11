import React from "react";
import Class from "classnames";

import "./scss/HeaderNavigation.scss";

import { LinkList } from "./partial/p-001-LinkList";

export function Navigation() {
  return (
    <nav className={Class("header-navigation")}>
      <LinkList />
    </nav>
  );
}
