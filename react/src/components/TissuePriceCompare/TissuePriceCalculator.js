import React, { useContext, useState, useEffect } from "react";
import Class from "classnames";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { calculatePrice } from "~components/TissuePriceCompare/TissuePriceCompareController";
import { TissuePriceCalculatorInput } from "~components/TissuePriceCompare/TissuePriceCalculatorInput";
import { TissuePriceCalculatorOutput } from "~components/TissuePriceCompare/TissuePriceCalculatorOutput";

import "./TissuePriceCalculator.scss";

export const TissuePriceCalculator = () => {
  const {
    rollCountContext: [rollCount, setRollerCount],
    sheetCountContext: [sheetCount, setSheetCount],
    layerCountContext: [layerCount, setLayerCount],
    priceContext: [price, setPrice],
  } = useContext(TissuePriceCalculatorContext);

  const [totalPrice, setTotalPrice] = useState(0);
  const calculatorSetter = [setRollerCount, setSheetCount, setLayerCount, setPrice];

  useEffect(() => {
    const calculatedPrice = calculatePrice(rollCount, sheetCount, layerCount, price);

    setTotalPrice(calculatedPrice);
  }, [rollCount, sheetCount, layerCount, price]);

  return (
    <div className={Class("TissuePriceCalculator")}>
      <div className={Class("TissuePriceCalculatorInputContainer")}>
        <TissuePriceCalculatorInput placeholder="Rollen" context="rollCountContext" type="number" />
        <TissuePriceCalculatorInput placeholder="Blatt" context="sheetCountContext" type="number" />
        <TissuePriceCalculatorInput placeholder="Lagen" context="layerCountContext" type="number" />
        <TissuePriceCalculatorInput placeholder="Preis" context="priceContext" type="price" />
      </div>
      <div className={Class("TissuePriceCalculatorOutputContainer")}>
        <TissuePriceCalculatorOutput totalPrice={totalPrice} calculatorSetter={calculatorSetter} />
      </div>
    </div>
  );
};
