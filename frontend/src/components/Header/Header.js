import React from "react";
import Class from "classnames";

import "./Header.scss";

import { HeaderIcon } from "./HeaderIcon";
import { HeaderNavigation } from "./HeaderNavigation";

export function Header() {
  return (
    <header className={Class("header")}>
      <div className={Class("header-container")}>
        <HeaderIcon />
        <HeaderNavigation />
      </div>
    </header>
  );
}
