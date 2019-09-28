import React, { useContext, useState, useEffect } from "react";
import Class from "classnames";

import { CalculatorContext } from "~context/CalculatorContext";

import { CalculatorInput } from "./CalculatorInput";
import { CalculatorOutput } from "./CalculatorOutput";

import "./PaperCalculator.scss";

export const PaperCalculator = () => {
  const {
    rollCountContext: [rollCount],
  } = useContext(CalculatorContext);

  const {
    sheetCountContext: [sheetCount],
  } = useContext(CalculatorContext);

  const {
    layerCountContext: [layerCount],
  } = useContext(CalculatorContext);

  const {
    priceContext: [price],
  } = useContext(CalculatorContext);

  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    if (rollCount > 0 && sheetCount > 0 && layerCount > 0 && price > 0) {
      const totalLayerCount = rollCount * sheetCount * layerCount;
      const singleLayerPrice = price / totalLayerCount;
      console.log("rollCount", rollCount);
      console.log("sheetCount", sheetCount);
      console.log("layerCount", layerCount);
      console.log("price", price);
      console.log("totalLayerCount", totalLayerCount);
      console.log("singleLayerPrice", singleLayerPrice);
      console.log("singleLayerPriceFixed", singleLayerPrice.toFixed(10));

      setTotalPrice(singleLayerPrice);
    }
  };

  useEffect(() => {
    console.log("price", price);
    calculatePrice();
  }, [rollCount, sheetCount, layerCount, price]);

  return (
    <div className={Class("PaperCalculator")}>
      <div className={Class("CalculatorInputContainer")}>
        <CalculatorInput placeholder="Rollen" context="rollCountContext" />
        <CalculatorInput placeholder="Blatt" context="sheetCountContext" />
        <CalculatorInput placeholder="Lagen" context="layerCountContext" />
        <CalculatorInput placeholder="Preis" context="priceContext" />
      </div>
      <div className={Class("CalculatorOutputContainer")}>
        <CalculatorOutput totalPrice={parseFloat(totalPrice)} />
      </div>
    </div>
  );
};
