import React from "react";
import Class from "classnames";

import "./MobileNavigation.scss";
import { NavigationLinkList } from "~components/Navigation/NavigationLinkList";


export function MobileNavigation() {
  return (
    <div className={Class("MobileNavigation")}>
      <NavigationLinkList />
    </div>
  );
}
