import React, { useEffect } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import "./CalculatorOutput.scss";
import {
  determineCheapestPrice,
  setClassOnCheapestElement,
  clearInput,
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
      <span className={Class("CalculatorOutput__Currency")}>€</span>
      <span className={Class("CalculatorOutput__Text")}>pro Lage</span>
      <button
        aria-label="Clear Button"
        className={Class("CalculatorOutput__ClearButton")}
        onClick={clearInput}
        type="button"
      />
    </div>
  );
};

CalculatorOutput.defaultProps = {
  totalPrice: PropTypes.number,
};

CalculatorOutput.propTypes = {
  totalPrice: PropTypes.number,
};
