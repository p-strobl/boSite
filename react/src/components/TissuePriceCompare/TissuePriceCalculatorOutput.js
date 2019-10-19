import React, { useEffect } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import "./TissuePriceCalculatorOutput.scss";
import { determineCheapestPrice, setClassOnOutputElements, resetCalculatorView } from "./TissuePriceCompareController";

export const TissuePriceCalculatorOutput = ({ totalPrice, calculatorSetter }) => {
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
    const filledOutputElements = determineCheapestPrice();
    setClassOnOutputElements(filledOutputElements);
  }, [localePrice]);

  return (
    <div className={Class("TissuePriceCalculatorOutput", { "TissuePriceCalculatorOutput--Show": totalPrice })}>
      {localePrice}
      <span className={Class("TissuePriceCalculatorOutput__Currency")}>€</span>
      <span className={Class("TissuePriceCalculatorOutput__Text")}>pro Lage</span>
      <button
        aria-label="Clear Button"
        className={Class("TissuePriceCalculatorOutput__ClearButton")}
        onClick={handleResetCalculatorClick}
        type="button"
      />
    </div>
  );
};

TissuePriceCalculatorOutput.defaultProps = {
  totalPrice: PropTypes.number,
  calculatorSetter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.array, PropTypes.func])),
};

TissuePriceCalculatorOutput.propTypes = {
  totalPrice: PropTypes.number,
  calculatorSetter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.array, PropTypes.func])),
};
