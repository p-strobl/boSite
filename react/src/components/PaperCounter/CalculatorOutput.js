import React, { useContext, useEffect } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import "./CalculatorOutput.scss";
import {
  determineCheapestPrice,
  setClassOnCheapestElement,
} from "./CalculatorController";

export const CalculatorOutput = ({ totalPrice }) => {
  const localePrice = totalPrice.toLocaleString("de-DE", {
    minimumFractionDigits: 6,
  });

  useEffect(() => {
    const cheapestElements = determineCheapestPrice();
    setClassOnCheapestElement(cheapestElements);
  }, [localePrice]);

  return (
    <div
      className={Class(
        `CalculatorOutput ${totalPrice ? "CalculatorOutput--Show" : ""}`,
      )}>
      {localePrice}
      <span>€</span>
    </div>
  );
};

CalculatorOutput.defaultProps = {
  totalPrice: PropTypes.number,
};

CalculatorOutput.propTypes = {
  totalPrice: PropTypes.number,
};
