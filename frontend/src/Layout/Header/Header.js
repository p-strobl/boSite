import React from "react";
import Class from "classnames";

import "./header.scss";

import { BoundingBar } from "../../components/BoundingBar/BoundingBar";
import { HeaderNavigation } from "../../components/HeaderNavigation/HeaderNavigation";

export function Header() {
  return (
    <header className={Class("header")}>
      <BoundingBar />
      <HeaderNavigation />
    </header>
  );
}
