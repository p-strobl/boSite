import React, { useContext, useState, useEffect } from "react";
import Class from "classnames";

import { CalculatorContext } from "~context/CalculatorContext";
import { calculatePrice } from "./CalculatorController";
import { CalculatorInput } from "./CalculatorInput";
import { CalculatorOutput } from "./CalculatorOutput";

import "./PaperCalculator.scss";

export const PaperCalculator = () => {
  const {
    rollCountContext: [rollCount],
    sheetCountContext: [sheetCount],
    layerCountContext: [layerCount],
    priceContext: [price],
  } = useContext(CalculatorContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(calculatePrice(rollCount, sheetCount, layerCount, price));
  }, [rollCount, sheetCount, layerCount, price]);

  return (
    <div className={Class("PaperCalculator")}>
      <div className={Class("CalculatorInputContainer")}>
        <CalculatorInput
          placeholder="Rollen"
          context="rollCountContext"
          type="number"
        />
        <CalculatorInput
          placeholder="Blatt"
          context="sheetCountContext"
          type="number"
        />
        <CalculatorInput
          placeholder="Lagen"
          context="layerCountContext"
          type="number"
        />
        <CalculatorInput
          placeholder="Preis"
          context="priceContext"
          type="price"
        />
      </div>
      <div className={Class("CalculatorOutputContainer")}>
        <CalculatorOutput totalPrice={totalPrice} />
      </div>
    </div>
  );
};
