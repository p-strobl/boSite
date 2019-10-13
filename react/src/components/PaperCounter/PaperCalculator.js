import React, { useContext, useState, useEffect } from "react";
import Class from "classnames";

import { CalculatorContext } from "~context/CalculatorContext";
import { calculatePrice } from "~components/PaperCounter/CalculatorController";
import { CalculatorInput } from "~components/PaperCounter/CalculatorInput";
import { CalculatorOutput } from "~components/PaperCounter/CalculatorOutput";

import "./PaperCalculator.scss";

export const PaperCalculator = () => {
  const {
    rollCountContext: [rollCount, setRollerCount],
    sheetCountContext: [sheetCount, setSheetCount],
    layerCountContext: [layerCount, setLayerCount],
    priceContext: [price, setPrice],
  } = useContext(CalculatorContext);

  const [totalPrice, setTotalPrice] = useState(0);
  const calculatorSetter = [setRollerCount, setSheetCount, setLayerCount, setPrice];

  useEffect(() => {
    const calculatedPrice = calculatePrice(rollCount, sheetCount, layerCount, price);

    setTotalPrice(calculatedPrice);
  }, [rollCount, sheetCount, layerCount, price]);

  return (
    <div className={Class("PaperCalculator")}>
      <div className={Class("CalculatorInputContainer")}>
        <CalculatorInput placeholder="Rollen" context="rollCountContext" type="number" />
        <CalculatorInput placeholder="Blatt" context="sheetCountContext" type="number" />
        <CalculatorInput placeholder="Lagen" context="layerCountContext" type="number" />
        <CalculatorInput placeholder="Preis" context="priceContext" type="price" />
      </div>
      <div className={Class("CalculatorOutputContainer")}>
        <CalculatorOutput totalPrice={totalPrice} calculatorSetter={calculatorSetter} />
      </div>
    </div>
  );
};
