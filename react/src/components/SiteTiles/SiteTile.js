import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Class from "classnames";
import { A } from "hookrouter";

import Base64 from "~src/helper/Base64ImagePlaceholder";

import { loadImages } from "~src/helper/ImageLoader";
import { Image } from "~components/Image";
import { Emoji } from "~components/Emoji";

import "./SiteTile.scss";

export function SiteTile({ site }) {
  const emoji = (
    <Emoji classs="SiteTileText__" emojiClass={`Emoji__${site.emoji}`} label={site.emoji} />
  );

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className={Class("SiteTile")}>
      <A className={Class("SiteTile__Anchor")} href={site.path}>
        <div className="SiteTile__ImageWrapper">
          <Image
            alt="Page Icon"
            classs="SiteTile__Image"
            imageSrc={site.imageSrc}
            src={Base64.dataImageSvgXml}
            title={site.title}
          />
        </div>
        <div className="SiteTileText__Container">
          {emoji}
          <h4 className={Class("SiteTile__Text")}>{site.title}</h4>
        </div>
      </A>
    </div>
  );
}

SiteTile.defaultProps = {
  site: {},
};

SiteTile.propTypes = {
  site: PropTypes.oneOfType([PropTypes.object]),
};
