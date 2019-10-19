import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Class from "classnames";
import { A } from "hookrouter";

import Base64 from "~src/helper/Base64ImagePlaceholder";

import { loadImages } from "~src/helper/ImageLoader";
import { Image } from "~components/Image";

import "./SiteTile.scss";

export function SiteTile({ siteObjectName, siteTitle, sitePath }) {
  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className={Class("SiteTile")}>
      <A className={Class("SiteTile__Anchor")} href={sitePath}>
        <Image
          alt="Page Icon"
          classs="SiteTile__Image"
          imageObjectSrc={siteObjectName}
          src={Base64.siteTile}
          title={siteTitle}
        />
        <h4 className={Class("SiteTile__Text")}>{siteTitle}</h4>
      </A>
    </div>
  );
}

SiteTile.defaultProps = {
  siteObjectName: PropTypes.string,
  siteTitle: PropTypes.string,
  sitePath: PropTypes.string,
};

SiteTile.propTypes = {
  siteObjectName: PropTypes.string,
  siteTitle: PropTypes.string,
  sitePath: PropTypes.string,
};
