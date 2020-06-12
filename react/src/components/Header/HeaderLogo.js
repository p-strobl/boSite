import React, { useContext } from "react";
import Class from "classnames";
import { A } from "hookrouter";

import { Images } from "~assets/images";

import RouterContext from "~context/RouteContext";
import Base64 from "~src/helper/Base64ImagePlaceholder";

import "./HeaderLogo.scss";

export function HeaderLogo() {
  const uiClasses = {
    asyncImage: "AsyncImage",
    headerLogoContainer: "Header__LogoContainer",
    headerLogoLink: "Header__LogoLink",
    headerLogo: "Header__Logo",
  };

  const { routes } = useContext(RouterContext);

  return (
    <div className={uiClasses.headerLogoContainer}>
      <A className={uiClasses.headerLogoLink} href={routes.home.path}>
        <img
          alt="boSite Icon"
          className={Class([uiClasses.headerLogo, uiClasses.asyncImage])}
          data-image-src={Images.logo}
          src={Base64.dataImageSvgXml}
          title="Home"
        />
      </A>
    </div>
  );
}
