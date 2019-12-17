import React, { useContext, useEffect, useRef } from "react";
import Class from "classnames";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./TissuePriceInputWheel.scss";
import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { ArrowButton } from "./ArrowButton";
import { WheelElements } from "./WheelElements";

export const TissuePriceInputWheel = ({ context, range }) => {
  const inputWheelRef = useRef(null);

  const {
    [context]: [, setInput],
  } = useContext(TissuePriceCalculatorContext);

  const clearInputWheelClass = (wheelNumbers) => {
    wheelNumbers.forEach((numberWheel) => {
      numberWheel.classList.remove("TissueInputWheel__Number--Active");
    });
  };

  const handleActiveWheelElement = (entry) => {
    // console.log("entry:", parseInt(entry[0].target.textContent, 10));
    entry[0].target.classList.add("TissueInputWheel__Number--Active");
    setInput(parseInt(entry[0].target.textContent, 10));
  };

  const initIntersectionObserver = () => {
    const config = {
      root: inputWheelRef.current,
      threshold: [0.99],
    };

    const wheelNumbers = inputWheelRef.current.querySelectorAll(".TissueInputWheel__Number");

    const observer = new IntersectionObserver((entry) => {
      if (entry.isIntersecting && entry[0].intersectionRatio <= 0) return;

      clearInputWheelClass(wheelNumbers);
      handleActiveWheelElement(entry);
    }, config);

    wheelNumbers.forEach((numberWheel) => {
      observer.observe(numberWheel);
    });
  };

  useEffect(() => {
    initIntersectionObserver();
  }, []);

  return (
    <div className={Class("TissueInputWheel")} key={uuidv4()} ref={inputWheelRef}>
      <ArrowButton direction="Up" />
      <WheelElements range={range} />
      <ArrowButton direction="Down" />
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
