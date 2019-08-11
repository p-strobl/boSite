import React from "react";
import Class from "classnames";

import "./HeaderNavigation.scss";

import { LinkList } from "./LinkList";

export function HeaderNavigation() {
  return (
    <nav className={Class("header-navigation")}>
      <LinkList />
    </nav>
  );
}
