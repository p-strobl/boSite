import React from "react";
import Class from "classnames";

import "./Header.scss";

import { BoundingBar } from "Components/BoundingBar";
import { HeaderIcon } from "./HeaderIcon";
import { HeaderNavigation } from "./HeaderNavigation";

export function Header() {
  return (
    <header className={Class("header")}>
      <HeaderIcon />
      <HeaderNavigation />
      <BoundingBar />
    </header>
  );
}
