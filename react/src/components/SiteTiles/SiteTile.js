import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { A } from "hookrouter";

import Base64 from "~src/helper/Base64ImagePlaceholder";

import { loadImages } from "~src/helper/ImageLoader";
import { Image } from "~components/Image";
import { Emoji } from "~components/Emoji";

import "./SiteTile.scss";

export function SiteTile({ site }) {
  const uiClasses = {
    siteTile: "SiteTile",
    siteTileAnchor: "SiteTile__Anchor",
    siteTileImageWrapper: "SiteTile__ImageWrapper",
    siteTileImage: "SiteTile__Image",
    siteTileTextContainer: "SiteTileText__Container",
    siteTileText: "SiteTile__Text",
    emoji: "Emoji",
  };

  const emoji = (
    <Emoji
      classs={`${uiClasses.siteTileText}`}
      emojiClass={`${uiClasses.emoji}__${site.emoji}`}
      label={site.emoji}
    />
  );

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className={uiClasses.siteTile}>
      <A className={uiClasses.siteTileAnchor} href={site.path}>
        <div className={uiClasses.siteTileImageWrapper}>
          <Image
            alt="Page Icon"
            classs={uiClasses.siteTileImage}
            imageSrc={site.imageSrc}
            src={Base64.dataImageSvgXml}
            title={site.title}
          />
        </div>
        <div className={uiClasses.siteTileTextContainer}>
          {emoji}
          <h4 className={uiClasses.siteTileText}>{site.title}</h4>
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
