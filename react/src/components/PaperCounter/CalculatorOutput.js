import React, { useEffect } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import "./CalculatorOutput.scss";
import { determineCheapestPrice, setClassOnCheapestElement, resetCalculatorView } from "./CalculatorController";

export const CalculatorOutput = ({ totalPrice, calculatorSetter }) => {
  if (typeof totalPrice === "undefined") return false;

  const localePrice = totalPrice.toLocaleString("de-DE", {
    minimumFractionDigits: 6,
  });

  const resetCalculatorSetter = () => {
    if (calculatorSetter.length === 0) return false;

    calculatorSetter.forEach((setterFunction) => {
      if (setterFunction.length === 0) return false;

      setterFunction(0);
      return true;
    });
    return false;
  };

  const handleResetCalculatorClick = (event) => {
    if (event.target.type !== "button") return false;

    resetCalculatorSetter();
    resetCalculatorView(event);
    return true;
  };

  useEffect(() => {
    const cheapestElements = determineCheapestPrice();

    setClassOnCheapestElement(cheapestElements);
  }, [localePrice]);

  return (
    <div className={Class("CalculatorOutput", { "CalculatorOutput--Show": totalPrice })}>
      {localePrice}
      <span className={Class("CalculatorOutput__Currency")}>€</span>
      <span className={Class("CalculatorOutput__Text")}>pro Lage</span>
      <button
        aria-label="Clear Button"
        className={Class("CalculatorOutput__ClearButton")}
        onClick={handleResetCalculatorClick}
        type="button"
      />
    </div>
  );
};

CalculatorOutput.defaultProps = {
  totalPrice: PropTypes.number,
  calculatorSetter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.array, PropTypes.func])),
};

CalculatorOutput.propTypes = {
  totalPrice: PropTypes.number,
  calculatorSetter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.array, PropTypes.func])),
};
