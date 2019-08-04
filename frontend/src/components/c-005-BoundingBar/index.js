import React from "react";
import cx from "classnames";

import "./BoundingBar.scss";

export function BoundingBar() {
  return (
    <>
      <div className={cx("bounding-bar", "bounding-bar--active")} />
    </>
  );
}
