import React from "react";

import "./Header.scss";

import { HeaderLogo } from "./HeaderLogo";
import { Navigation } from "~components/Navigation";

export function Header() {
  const uiClasses = {
    header: "Header",
    headerContainer: "Header__Container",
  };

  return (
    <header className={uiClasses.header}>
      <div className={uiClasses.headerContainer}>
        <HeaderLogo />
        <Navigation />
      </div>
    </header>
  );
}
