import React from "react";
import Class from "classnames";

import "./MobileNavigation.scss";
import { HeaderLinkList } from "../Header/HeaderLinkList";


export function MobileNavigation() {
  return (
    <div className={Class("MobileNavigation")}>
      <HeaderLinkList />
    </div>
  );
}
