import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CalculatorContext = createContext(null);

export default function CalculatorStore({ children }) {
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
    <CalculatorContext.Provider value={calculatorStore}>
      {children}
    </CalculatorContext.Provider>
  );
}

CalculatorStore.displayName = "CalculatorStore";

CalculatorStore.defaultProps = {
  children: PropTypes.element,
};

CalculatorStore.propTypes = {
  children: PropTypes.element,
};
