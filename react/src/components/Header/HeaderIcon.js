import React from "react";
import Class from "classnames";

import "./HeaderIcon.scss";
import Icon from "~assets/images/bo-Site.png";

export function HeaderIcon() {
  return (
    <div className={Class("header-image-wrapper")}>
      <img className={Class("header-image")} src={Icon} alt="bo-site" />
    </div>
  );
}