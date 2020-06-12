import React, { useContext, useState, useEffect } from "react";
import Class from "classnames";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { TissuePriceCalculatorInputRange } from "~components/TissuePriceCompare/TissuePriceCalculatorInputRange";
import { TissuePriceCalculatorInputNumber } from "~components/TissuePriceCompare/TissuePriceCalculatorInputNumber";
import { TissuePriceCalculatorOutput } from "~components/TissuePriceCompare/TissuePriceCalculatorOutput";

import "./TissuePriceCalculator.scss";

export const TissuePriceCalculator = () => {
  const uiClasses = {
    calculator: "TissuePriceCalculator",
    calculatorItem: "TissuePriceCalculator__Item",
    calculatorInput: "TissuePriceCalculator__Input",
    calculatorOutput: "TissuePriceCalculator__Output",
  };

  const {
    rollCountContext: [rollCount],
    sheetCountContext: [sheetCount],
    layerCountContext: [layerCount],
    priceContext: [price],
    defaultValues,
  } = useContext(TissuePriceCalculatorContext);

  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    if (rollCount > 0 && sheetCount > 0 && layerCount > 0 && price > 0) {
      const totalLayerCount = rollCount * sheetCount * layerCount;
      const singleLayerPrice = price / totalLayerCount;

      return singleLayerPrice.toFixed(6);
    }

    return 0;
  };

  useEffect(() => {
    const calculatedPrice = calculatePrice();

    setTotalPrice(calculatedPrice);
  }, [rollCount, sheetCount, layerCount, price]);

  return (
    <div className={uiClasses.calculator}>
      <div className={Class([uiClasses.calculatorItem, uiClasses.calculatorInput])}>
        <TissuePriceCalculatorInputRange
          context="rollCountContext"
          dataDefaultValue={defaultValues.rollCount}
          defaultValue={rollCount}
          max={20}
          min={0}
          step={1}
          text="Rollen"
        />
        <TissuePriceCalculatorInputRange
          context="sheetCountContext"
          dataDefaultValue={defaultValues.sheetCount}
          defaultValue={sheetCount}
          max={200}
          min={0}
          step={1}
          text="Blatt"
        />
        <TissuePriceCalculatorInputRange
          context="layerCountContext"
          dataDefaultValue={defaultValues.layerCount}
          defaultValue={layerCount}
          max={5}
          min={0}
          step={1}
          text="Lagen"
        />
        <TissuePriceCalculatorInputNumber
          context="priceContext"
          dataDefaultValue={defaultValues.price}
          defaultValue={price}
          placeholder="0,00€ Kaufpreis"
          text="Kaufpreis"
        />
      </div>
      <div className={Class([uiClasses.calculatorItem, uiClasses.calculatorOutput])}>
        <TissuePriceCalculatorOutput totalPrice={totalPrice} value={price} />
      </div>
    </div>
  );
};
