import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

import { Images } from "~assets/images";

export function Image({ alt, classs, imageObjectSrc, src, title }) {
  const [, imageUrlPath] = Object.entries(Images).find(([key, value]) => {
    return imageObjectSrc === key ? value : false;
  });

  return (
    <img
      alt={alt}
      className={Class(`${classs} AsyncImage`)}
      data-image-src={imageUrlPath}
      src={src}
      title={`Visit ${title}`}
    />
  );
}

Image.defaultProps = {
  alt: PropTypes.string,
  classs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  imageObjectSrc: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
};

Image.propTypes = {
  alt: PropTypes.string,
  classs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  imageObjectSrc: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
};
