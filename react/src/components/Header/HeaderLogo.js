import React, { useContext } from "react";
import Class from "classnames";
import { A } from "hookrouter";

import { Images } from "~assets/images";

import RouterContext from "~context/RouteContext";
import Base64 from "~src/helper/Base64ImagePlaceholder";

import "./HeaderLogo.scss";

export function HeaderLogo() {
  const { routes } = useContext(RouterContext);

  return (
    <div className={Class("Header__LogoContainer")}>
      <A className={Class("Header__LogoLink")} href={routes.home.path}>
        <img
          alt="boSite Icon"
          className={Class("Header__Logo AsyncImage")}
          data-image-src={Images.logo}
          src={Base64.dataImageSvgXml}
          title="Back to Home"
        />
      </A>
    </div>
  );
}
