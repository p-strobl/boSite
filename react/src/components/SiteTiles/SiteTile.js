import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Class from "classnames";
import { A } from "hookrouter";

import Base64 from "~src/helper/Base64ImagePlaceholder";
import * as Utils from "~src/helper/Utilities";

import { loadImages } from "~src/helper/ImageLoader";
import { Image } from "~components/Image";

import "./SiteTile.scss";

export function SiteTile({ siteName, sitePath }) {
  const title = Utils.splitOnCamelCase(siteName);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className={Class("SiteTile")}>
      <A className={Class("SiteTile__Anchor")} href={sitePath}>
        <Image alt="Page Icon" classs="SiteTile__Image" dataImageSrc={siteName} src={Base64.siteTile} title={title} />
        <h4>Text</h4>
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
