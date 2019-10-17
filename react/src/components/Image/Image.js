import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

import { Images } from "~assets/images";

export function Image({ alt, classs, dataImageSrc, src, title }) {
  const [, path] = Object.entries(Images).find(([key, value]) => {
    return dataImageSrc === key ? value : false;
  });

  return (
    <img alt={alt} className={Class(`${classs} AsyncImage`)} data-image-src={path} src={src} title={`Visit ${title}`} />
  );
}

Image.defaultProps = {
  alt: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  dataImageSrc: PropTypes.string,
  classs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  dataImageSrc: PropTypes.string,
  classs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
