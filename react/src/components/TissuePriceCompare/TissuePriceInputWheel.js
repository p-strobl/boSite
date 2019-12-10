import React, { useContext, useEffect } from "react";
import Class from "classnames";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./TissuePriceInputWheel.scss";
import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";

export const TissuePriceInputWheel = ({ context, range }) => {
  const {
    [context]: [input, setInput],
  } = useContext(TissuePriceCalculatorContext);

  const createWheelRangeElements = () => {
    const wheelRange = [];

    for (let i = 0; i < range + 1; i += 1) {
      wheelRange.push(
        <div className="TissueInputWheel__Number" key={uuidv4()}>
          {i}
        </div>,
      );
    }

    return wheelRange;
  };

  const oberserveWheel = (wheel) => {
    const config = {
      root: wheel,
      threshold: [0.99],
      // trackVisibility: true,
      // delay: 100,
    };

    const wheelNumbers = wheel.querySelectorAll(".TissueInputWheel__Number");

    const observer = new IntersectionObserver((entry) => {
      if (entry[0].intersectionRatio > 0) {
        console.log("", context, input);
        console.log("entry:", entry[0].target.textContent);
        // setInput(entry[0].target.textContent);
      }
      // console.log("observer:", observer);
    }, config);

    wheelNumbers.forEach((image) => {
      observer.observe(image);
    });
  };

  useEffect(() => {
    const wheels = document.querySelectorAll(".TissueInputWheel");

    wheels.forEach((wheel) => {
      oberserveWheel(wheel);
    });
  }, []);

  return (
    <div className={Class("TissueInputWheel")} key={uuidv4()}>
      <div className="TissueInputWheel__Button TissueInputWheel__Button--Up" />
      <div className="TissueInputWheel__Container">{createWheelRangeElements() || ""}</div>
      <div className="TissueInputWheel__Button TissueInputWheel__Button--Down" />
    </div>
  );
};

TissuePriceInputWheel.defaultProps = {
  context: "",
  range: 0,
};

TissuePriceInputWheel.propTypes = {
  context: PropTypes.string,
  range: PropTypes.number,
};
