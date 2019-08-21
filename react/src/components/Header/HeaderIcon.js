import React, { useContext } from "react";
import Class from "classnames";
import { A } from "hookrouter";
import RouterContext from "~context/RouteContext";

import "./HeaderIcon.scss";
import Icon from "~assets/images/bo-Site.png";

export function HeaderIcon() {
  const routes = useContext(RouterContext);
  return (
    <div className={Class("header-image-wrapper")}>
      <A href={routes.home}>
        <img
          className={Class("header-image")}
          src={Icon}
          alt="boSite Icon"
          title="Back to Home"
        />
      </A>
    </div>
  );
}
