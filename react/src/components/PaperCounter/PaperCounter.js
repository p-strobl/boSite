import React from "react";
import { useTitle } from "hookrouter";
import Class from "classnames";

import "./PaperCounter.scss";

export const PaperCounter = () => {
  useTitle("Bo's Paper Counter");

  return (
    <div>
      <div>PaperCount</div>
    </div>
  );
};
