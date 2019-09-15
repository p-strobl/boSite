import React from "react";
import Class from "classnames";

import "./Header.scss";

import { HeaderLogo } from "./HeaderLogo";
import { HeaderNavigation } from "./HeaderNavigation";
import { HeaderLinkIndicator } from "./HeaderLinkIndicator";

export function Header() {
  return (
    <header className={Class("Header")}>
      <div className={Class("Header__Container")}>
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderLinkIndicator />
      </div>
    </header>
  );
}
