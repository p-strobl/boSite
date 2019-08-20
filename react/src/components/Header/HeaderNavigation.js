import React from "react";
import Class from "classnames";

import "./HeaderNavigation.scss";

import { HeaderLinkList } from "./HeaderLink";

export function HeaderNavigation() {
  return (
    <nav className={Class("header-navigation-wrapper")}>
      <HeaderLinkList />
    </nav>
  );
}
