import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

export function Image({ alt, classs, imageSrc, src, title }) {
  const uiClasses = {
    asyncImage: "AsyncImage",
  };

  return (
    <img
      alt={alt}
      className={Class([classs, uiClasses.asyncImage])}
      data-image-src={imageSrc}
      src={src}
      title={`Visit ${title}`}
    />
  );
}

Image.defaultProps = {
  alt: "",
  classs: "" || {},
  imageSrc: "",
  src: "",
  title: "",
};

Image.propTypes = {
  alt: PropTypes.string,
  classs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  imageSrc: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
};
