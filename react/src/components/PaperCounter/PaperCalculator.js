import React, { useContext, useState, useEffect } from "react";
import Class from "classnames";

import { CalculatorContext } from "~context/CalculatorContext";
import {
  calculatePrice,
  addPaperCalculator,
  showAddButton,
} from "./CalculatorController";
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
    const calculatedPrice = calculatePrice(
      rollCount,
      sheetCount,
      layerCount,
      price,
    );

    setTotalPrice(calculatedPrice);

    showAddButton();
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
      <button
        className={Class("AddPaperCalculator")}
        type="button"
        onClick={addPaperCalculator}>
        This is a Add Button
      </button>
    </div>
  );
};
