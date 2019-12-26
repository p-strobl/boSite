import React, { useState, useEffect } from "react";
import Class from "classnames";

import { PriceInput } from "~components/TissuePriceCompare/PriceInput";
import { PriceOutput } from "~components/TissuePriceCompare/PriceOutput";
import { WheelInput } from "~components/TissuePriceCompare/WheelInput";

import "./Calculator.scss";

export const Calculator = () => {
  const defaultValues = {
    rollCount: 10,
    sheetCount: 180,
    layerCount: 3,
    price: "",
  };

  const inputValues = {
    rollCount: 0,
    sheetCount: 0,
    layerCount: 0,
    price: 0,
  };

  const calculatePrice = () => {
    if (
      inputValues.rollCount === 0 ||
      inputValues.sheetCount === 0 ||
      inputValues.layerCount === 0 ||
      inputValues.price === 0
    )
      return 0;

    const totalLayerCount = inputValues.rollCount * inputValues.sheetCount * inputValues.layerCount;
    const singleLayerPrice = inputValues.price / totalLayerCount;

    return singleLayerPrice.toFixed(6) / 100;
  };

  const handleInput = (input, setter) => {
    if (input === 0 || setter.length === 0) return;

    inputValues[setter] = input;
    console.log("calculatePrice", calculatePrice());
  };

  return (
    <div className={Class("Calculator")}>
      <div className={Class("Calculator__Item Calculator__Input")}>
        <WheelInput
          setter="rollCount"
          defaultValue={defaultValues.rollCount}
          range={20}
          getWheelInput={handleInput}
        />
        <WheelInput
          setter="sheetCount"
          defaultValue={defaultValues.sheetCount}
          range={200}
          getWheelInput={handleInput}
        />
        <WheelInput
          setter="layerCount"
          defaultValue={defaultValues.layerCount}
          range={5}
          getWheelInput={handleInput}
        />
        <PriceInput
          setter="price"
          dataDefaultValue={defaultValues.price}
          defaultValue={inputValues.price}
          placeholder="Kaufpreis"
          text="Kaufpreis"
          getNumberInput={handleInput}
        />
      </div>
      {/*<div className={Class("Calculator__Item Calculator__Output")}>*/}
      {/*  <PriceOutput totalPrice={totalPrice} value={price} />*/}
      {/*</div>*/}
    </div>
  );
};
