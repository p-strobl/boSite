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
    rollCountContext: [rollCount],
    sheetCountContext: [sheetCount],
    layerCountContext: [layerCount],
    priceContext: [price],
    defaultValues,
  } = useContext(TissuePriceCalculatorContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatedPrice = calculatePrice(
      rollCount,
      sheetCount,
      layerCount,
      price,
    );

    setTotalPrice(calculatedPrice);
  }, [rollCount, sheetCount, layerCount, price]);

  return (
    <form className={Class("TissuePriceCalculator")}>
      <div className={Class("TissuePriceCalculatorInputContainer")}>
        <TissuePriceCalculatorInputRange
          context="rollCountContext"
          dataDefaultValue={defaultValues.rollCount}
          defaultValue={rollCount}
          max={30}
          step={2}
          text="Rollen"
        />
        <TissuePriceCalculatorInputRange
          context="sheetCountContext"
          dataDefaultValue={defaultValues.sheetCount}
          defaultValue={sheetCount}
          max={300}
          step={10}
          text="Blatt"
        />
        <TissuePriceCalculatorInputRange
          context="layerCountContext"
          dataDefaultValue={defaultValues.layerCount}
          defaultValue={layerCount}
          max={5}
          step={1}
          text="Lagen"
        />
        <TissuePriceCalculatorInputNumber
          context="priceContext"
          dataDefaultValue={defaultValues.price}
          defaultValue={price}
          placeholder="Preis"
          text="Preis"
        />
      </div>
      <div className={Class("TissuePriceCalculatorOutputContainer")}>
        <TissuePriceCalculatorOutput totalPrice={totalPrice} value={price} />
      </div>
    </form>
  );
};
