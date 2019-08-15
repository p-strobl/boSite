import React from "react";

import "./Header.scss";

import { BoundingBar } from "Components/BoundingBar/BoundingBar";
import { HeaderNavigation } from "./HeaderNavigation";

export function Header() {
  return (
    <header>
      <BoundingBar />
      <HeaderNavigation />
    </header>
  );
}
