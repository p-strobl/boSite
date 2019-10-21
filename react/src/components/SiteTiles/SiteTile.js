import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Class from "classnames";
import { A } from "hookrouter";

import Base64 from "~src/helper/Base64ImagePlaceholder";

import { loadImages } from "~src/helper/ImageLoader";
import { Image } from "~components/Image";
import { Emoji } from "~components/Emoji";

import "./SiteTile.scss";

export function SiteTile({ siteObject }) {
  const emoji = <Emoji classs="SiteTileText__" emojiClass={`Emoji__${siteObject.emoji}`} label={siteObject.emoji} />;

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className={Class("SiteTile")}>
      <A className={Class("SiteTile__Anchor")} href={siteObject.path}>
        <Image
          alt="Page Icon"
          classs="SiteTile__Image"
          imageObjectSrc={siteObject.name}
          src={Base64.siteTile}
          title={siteObject.title}
        />
        <div className="SiteTileText__Container">
          {emoji}
          <h4 className={Class("SiteTile__Text")}>{siteObject.title}</h4>
        </div>
      </A>
    </div>
  );
}

SiteTile.defaultProps = {
  siteObject: PropTypes.oneOfType([PropTypes.object]),
};

SiteTile.propTypes = {
  siteObject: PropTypes.oneOfType([PropTypes.object]),
};
