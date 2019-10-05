import React, { useContext, useEffect } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import "./CalculatorOutput.scss";
import { CheapestPriceContext } from "~context/CheapestPriceContext";
import {
  determineCheapestPrice,
  setClassOnCheapestPriceElement,
} from "./CalculatorController";

export const CalculatorOutput = ({ totalPrice }) => {
  const {
    cheapestPriceContext: [cheapestPrice, setCheapestPrice],
  } = useContext(CheapestPriceContext);

  const localePrice = totalPrice.toLocaleString("de-DE", {
    minimumFractionDigits: 6,
  });

  useEffect(() => {
    const cheapestElement = determineCheapestPrice();
    setClassOnCheapestPriceElement(cheapestElement);
  }, [localePrice]);

  return (
    <div className={Class("CalculatorOutput")}>
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
