import React, { useEffect, useRef, useState } from "react";
import Class from "classnames";
import uuidv4 from "uuid/v4";

import { ArrowButton } from "~components/TissuePriceCompare/WheelInput/ArrowButton";
import { WheelElements } from "~components/TissuePriceCompare/WheelInput/WheelElements";
import "~components/TissuePriceCompare/WheelInput/WheelInput.scss";

export const Test = () => {
  return (
    <div className={Class("WheelContainer")} key={uuidv4()}>
      <ArrowButton direction="Prev" />
      <WheelElements calculatorIndex={0} type="roll" />
      <ArrowButton direction="Next" />
    </div>
  );
};
