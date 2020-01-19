import React, { useContext, useState, useEffect, useRef } from "react";
import Class from "classnames";
import uuidv4 from "uuid/v4";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { PriceInput } from "~components/TissuePriceCompare/PriceInput";
import { PriceOutput } from "~components/TissuePriceCompare/PriceOutput";
import { WheelInput } from "~components/TissuePriceCompare/WheelInput";

import "./Calculator.scss";

export const Calculator = ({
  globalCalculatorState,
  ownCalculatorIndex,
  setGlobalCalculatorState,
}) => {
  console.log("globalCalculatorState", globalCalculatorState);
  const [calculatorState, setCalculatorState] = useState(globalCalculatorState);

  const calculatePrice = () => {
    if (rollCount === 0 || sheetCount === 0 || layerCount === 0 || price === 0) return 0;

    const totalLayerCount = rollCount * sheetCount * layerCount;
    const singleLayerPrice = price / totalLayerCount;

    return singleLayerPrice.toFixed(6) / 100;
  };

  const toLocalPrice = (value) => {
    if (value === 0) return;

    setLocalPrice(
      value.toLocaleString("de-DE", {
        minimumFractionDigits: 6,
      }),
    );
  };

  function handleCalculatorWheelOutput(wheelOutput) {
    console.log("wheelOutput", wheelOutput);
    console.log("calculatorState", calculatorState);
    const wheelStates = document.querySelectorAll(".Wheel__Number--Active");
    console.log("wh", wheelStates);
    // console.log("wheelOutput", calculatorState);
    // console.log("calculatorState", [wheelOutput.wheelContext][0]);
    // setCalculatorState({
    //   ...calculatorState,
    //   [calculatorState[wheelOutput.wheelContext]]: wheelOutput.wheelValue,
    // });
    // console.log("calculatorState", calculatorState);
  }

  function createInputWheels() {
    // console.log("calculatorState", calculatorState);
    return Object.entries(calculatorState).map(([context, calculator]) => {
      // console.log("calculator", calculator);
      return (
        <WheelInput
          ownState={{ [context]: calculator }}
          key={uuidv4()}
          handleCalculatorWheelOutput={handleCalculatorWheelOutput}
        />
      );
    });
  }

  useEffect(() => {}, [calculatorState]);

  return (
    <div className={Class("Calculator")}>
      <div className={Class("Calculator__Item Calculator__Input")}>
        {calculatorState && createInputWheels()}
        {/*<PriceInput*/}
        {/*  context="priceContext"*/}
        {/*  dataDefaultValue={defaultValues.price}*/}
        {/*  defaultValue={price}*/}
        {/*  placeholder="Kaufpreis"*/}
        {/*  text="Kaufpreis"*/}
        {/*  getNumberInput={handleInput}*/}
        {/*/>*/}
      </div>
      <div className={Class("Calculator__Item Calculator__Output")}>
        {/*<PriceOutput localPrice={totalPrice} value={price} />*/}
      </div>
    </div>
  );
};
