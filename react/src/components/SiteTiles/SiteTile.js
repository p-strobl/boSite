import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { A } from "hookrouter";
import Class from "classnames";
import * as Utils from "~src/helper/Utilities";
import Base64 from "~src/helper/Base64ImagePlaceholder";
import { loadImages } from "~src/helper/ImageLoader";
import { Images } from "~assets/images";
import "./SiteTile.scss";

export function SiteTile({ siteName, sitePath }) {
  const title = Utils.splitOnCamelCase(siteName);
  console.log("siteName", siteName);
  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className={Class("SiteTile")}>
      <A className={Class("SiteTile__Anchor")} href={sitePath}>
        <img
          alt="Page Icon"
          className={Class("SiteTile__Image AsyncImage")}
          data-image-src={Images.siteName}
          src={Base64.siteTile}
          title={`Visit ${title}`}
        />
      </A>
    </div>
  );
}

SiteTile.defaultProps = {
  siteName: PropTypes.string,
  sitePath: PropTypes.string,
};

SiteTile.propTypes = {
  siteName: PropTypes.string,
  sitePath: PropTypes.string,
};
