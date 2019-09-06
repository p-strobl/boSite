import React, { useContext } from "react";
import Class from "classnames";
import { A } from "hookrouter";
import RouterContext from "~context/RouteContext";
import { Images } from "~assets/images";

import "./HeaderLogo.scss";

export function HeaderLogo() {
  const routes = useContext(RouterContext);
  return (
    <div className={Class("Header__LogoContainer")}>
      <A href={routes.home}>
        <img
          className={Class("Header__Logo")}
          src={Images.logo}
          alt="boSite Icon"
          title="Back to Home"
        />
      </A>
    </div>
  );
}
