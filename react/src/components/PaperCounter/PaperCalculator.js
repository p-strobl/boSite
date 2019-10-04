import React, { useContext, useState, useEffect } from "react";
import Class from "classnames";

import { CalculatorContext } from "~context/CalculatorContext";

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

  const determineCheapestPrice = () => {
    const calculatorOutput = Array.from(
      document.querySelectorAll(".CalculatorOutput"),
    );
    console.log("calculatorOutput", calculatorOutput);

    const cheapest = calculatorOutput.reduce((previousValue, currentValue) => {
      const prevValue = previousValue.textContent;
      const currValue = currentValue.textContent;
      return prevValue < currValue ? previousValue : currentValue;
    }, []);
    console.log("cheapest", cheapest);
    // const cheapest = calculatorOutput.reduce((acc, element) => {
    //   console.log("acc", acc);
    //   console.log("acc.textContent", acc.textContent);
    //   console.log("element", element);
    //   console.log("element.textContent", element.textContent);
    //
    //   return element.textContent < acc.textContent;
    // });

    // console.log("cheapest", cheapest);

    // calculatorOutput.forEach((output, index) => {
    //   console.log("output", output.textContent);
    // });
  };

  const calculatePrice = () => {
    if (rollCount > 0 && sheetCount > 0 && layerCount > 0 && price > 0) {
      const totalLayerCount = rollCount * sheetCount * layerCount;
      const singleLayerPrice = price / totalLayerCount;
      const displayedSingleLayerPrice = singleLayerPrice.toFixed(6) / 100;

      setTotalPrice(displayedSingleLayerPrice);
      determineCheapestPrice();
    }
  };

  useEffect(() => {
    calculatePrice();
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
        <CalculatorOutput totalPrice={parseFloat(totalPrice)} />
      </div>
    </div>
  );
};
