import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TissuePriceCalculatorContext = createContext(null);

export default function TissuePriceCalculatorStore({ children }) {
  const [rollCount, setRollCount] = useState(0);
  const [sheetCount, setSheetCount] = useState(0);
  const [layerCount, setLayerCount] = useState(0);
  const [price, setPrice] = useState(0);

  const calculatorStore = {
    rollCountContext: [rollCount, setRollCount],
    sheetCountContext: [sheetCount, setSheetCount],
    layerCountContext: [layerCount, setLayerCount],
    priceContext: [price, setPrice],
  };

  return (
    <TissuePriceCalculatorContext.Provider value={calculatorStore}>{children}</TissuePriceCalculatorContext.Provider>
  );
}

TissuePriceCalculatorStore.displayName = "CalculatorStore";

TissuePriceCalculatorStore.defaultProps = {
  children: PropTypes.element,
};

TissuePriceCalculatorStore.propTypes = {
  children: PropTypes.element,
};
