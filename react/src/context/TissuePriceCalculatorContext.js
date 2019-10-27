import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TissuePriceCalculatorContext = createContext(null);

export default function TissuePriceCalculatorStore({ children }) {
  const defaultValues = {
    rollCount: 12,
    sheetCount: 200,
    layerCount: 3,
    price: "",
  };

  const [rollCount, setRollCount] = useState(defaultValues.rollCount);
  const [sheetCount, setSheetCount] = useState(defaultValues.sheetCount);
  const [layerCount, setLayerCount] = useState(defaultValues.layerCount);
  const [price, setPrice] = useState(defaultValues.price);
  const calculatorStore = {
    rollCountContext: [rollCount, setRollCount],
    sheetCountContext: [sheetCount, setSheetCount],
    layerCountContext: [layerCount, setLayerCount],
    priceContext: [price, setPrice],
    defaultValues,
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
