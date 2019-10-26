import React, { useContext, useEffect } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import {
  determineCheapestPrice,
  setClassOnOutputElements,
  resetCalculatorView,
  resetCalculatorState,
} from "./TissuePriceCompareController";

import "./TissuePriceCalculatorOutput.scss";

export const TissuePriceCalculatorOutput = ({ totalPrice }) => {
  if (typeof totalPrice === "undefined") return false;

  const {
    rollCountContext: [, setRollerCount],
    sheetCountContext: [, setSheetCount],
    layerCountContext: [, setLayerCount],
    priceContext: [, setPrice],
    defaultValues,
  } = useContext(TissuePriceCalculatorContext);

  const calculatorSetter = {
    rollCount: setRollerCount,
    sheetCount: setSheetCount,
    layerCount: setLayerCount,
    price: setPrice,
  };

  const localePrice = totalPrice.toLocaleString("de-DE", {
    minimumFractionDigits: 6,
  });

  const handleCalculatorReset = (event) => {
    if (event.target.type !== "button") return false;

    resetCalculatorState(calculatorSetter, defaultValues);
    resetCalculatorView(event);
    return true;
  };

  useEffect(() => {
    const filledOutputElements = determineCheapestPrice();
    setClassOnOutputElements(filledOutputElements);
  }, [localePrice]);

  return (
    <div
      className={Class("TissuePriceCalculatorOutput", {
        "TissuePriceCalculatorOutput--Show": totalPrice,
      })}>
      {localePrice}
      <span className={Class("TissuePriceCalculatorOutput__Currency")}>€</span>
      <span className={Class("TissuePriceCalculatorOutput__Text")}>
        pro Lage
      </span>
      <button
        aria-label="Clear Button"
        className={Class("TissuePriceCalculatorOutput__ClearButton")}
        onClick={handleCalculatorReset}
        type="button"
      />
    </div>
  );
};

TissuePriceCalculatorOutput.defaultProps = {
  totalPrice: PropTypes.number,
};

TissuePriceCalculatorOutput.propTypes = {
  totalPrice: PropTypes.number,
};
