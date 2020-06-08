import React from "react";
import Class from "classnames";

import "./Header.scss";

import { HeaderLogo } from "./HeaderLogo";
import { Navigation } from "~components/Navigation";

export function Header() {
  return (
    <header className={Class("Header")}>
      <div className={Class("Header__Container")}>
        <HeaderLogo />
        <Navigation />
      </div>
    </header>
  );
}
