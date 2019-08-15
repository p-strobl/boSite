import React from "react";
import Class from "classnames";

import "./HeaderNavigation.scss";

import { HeaderLinkList } from "./HeaderLinkList";

export function HeaderNavigation() {
  return (
    <nav className={Class("HeaderNavigation")}>
      <HeaderLinkList />
    </nav>
  );
}
