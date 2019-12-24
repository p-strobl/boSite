import React, { useContext, useState, useEffect } from "react";
import Class from "classnames";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { TissuePriceCalculatorInputRange } from "~components/TissuePriceCompare/TissuePriceCalculatorInputRange";
import { TissuePriceCalculatorInputNumber } from "~components/TissuePriceCompare/TissuePriceCalculatorInputNumber";
import { TissuePriceCalculatorOutput } from "~components/TissuePriceCompare/TissuePriceCalculatorOutput";
import { TissuePriceInputWheel } from "~components/TissuePriceCompare/TissuePriceInputWheel";

import "./TissuePriceCalculator.scss";

export const TissuePriceCalculator = () => {
  const {
    rollCountContext: [rollCount],
    sheetCountContext: [sheetCount],
    layerCountContext: [layerCount],
    priceContext: [price],
    defaultValues,
  } = useContext(TissuePriceCalculatorContext);

  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    if (rollCount === 0 || sheetCount === 0 || layerCount === 0 || price === 0) return 0;

    const totalLayerCount = rollCount * sheetCount * layerCount;
    const singleLayerPrice = price / totalLayerCount;

    return singleLayerPrice.toFixed(6) / 100;
  };

  const getWheelInput = (input) => {
    console.log("getWheelInput", input);
  };

  const getNumberInput = (input) => {
    console.log("priceContext", price);
    console.log("getNumberInput", input);
  };

  return (
    <div className={Class("TissuePriceCalculator")}>
      <div className={Class("TissuePriceCalculator__Item TissuePriceCalculator__Input")}>
        <TissuePriceInputWheel
          context="rollCountContext"
          defaultValue={defaultValues.rollCount}
          range={20}
          getWheelInput={getWheelInput}
        />
        <TissuePriceInputWheel
          context="sheetCountContext"
          defaultValue={defaultValues.sheetCount}
          range={200}
          getWheelInput={getWheelInput}
        />
        <TissuePriceInputWheel
          context="layerCountContext"
          defaultValue={defaultValues.layerCount}
          range={5}
          getWheelInput={getWheelInput}
        />
        <TissuePriceCalculatorInputNumber
          context="priceContext"
          dataDefaultValue={defaultValues.price}
          defaultValue={price}
          placeholder="Kaufpreis"
          text="Kaufpreis"
          getNumberInput={getNumberInput}
        />
      </div>
      <div className={Class("TissuePriceCalculator__Item TissuePriceCalculator__Output")}>
        <TissuePriceCalculatorOutput totalPrice={totalPrice} value={price} />
      </div>
    </div>
  );
};
