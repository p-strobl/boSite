import React, { useContext, useState, useEffect } from "react";
import Class from "classnames";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { calculatePrice } from "~components/TissuePriceCompare/TissuePriceCompareController";
import { TissuePriceCalculatorInputRange } from "~components/TissuePriceCompare/TissuePriceCalculatorInputRange";
import { TissuePriceCalculatorInputNumber } from "~components/TissuePriceCompare/TissuePriceCalculatorInputNumber";
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
        <TissuePriceCalculatorInputRange context="rollCountContext" text="Rollen" defaultValue={12} max={30} step={2} />
        <TissuePriceCalculatorInputRange
          context="sheetCountContext"
          text="Blatt"
          defaultValue={200}
          max={300}
          step={10}
        />
        <TissuePriceCalculatorInputRange context="layerCountContext" text="Lagen" defaultValue={3} max={5} step={1} />
        <TissuePriceCalculatorInputNumber placeholder="Preis" text="Preis" context="priceContext" type="price" />
      </div>
      <div className={Class("TissuePriceCalculatorOutputContainer")}>
        <TissuePriceCalculatorOutput totalPrice={totalPrice} calculatorSetter={calculatorSetter} />
      </div>
    </div>
  );
};
