import React from "react";
import Class from "classnames";
import * as Utils from "~src/helper/Utilities";

import Base64 from "~src/helper/Base64ImagePlaceholder";

import "./SiteTile.scss";

export function SiteTile({ siteName }) {
  const title = Utils.splitOnCamelCase(siteName);
  return (
    <div className={Class("SiteTile")}>
      <a className={Class("SiteTile__Anchor")} href={`/${siteName}`}>
        <img
          alt="Page Icon"
          className={Class("SiteTile__Image AsyncImage")}
          data-image-src="http://lorempixel.com/400/400/sports"
          src={Base64.siteTile}
          title={`Visit ${Utils.capitalizeFirstLetter(title)}`}
        />
      </a>
    </div>
  );
}
