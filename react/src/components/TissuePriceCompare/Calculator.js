import React, { useContext, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Class from "classnames";
import uuidv4 from "uuid/v4";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { PriceInput } from "~components/TissuePriceCompare/PriceInput";
import { PriceOutput } from "~components/TissuePriceCompare/PriceOutput";
import { WheelInput } from "~components/TissuePriceCompare/WheelInput";

import "./Calculator.scss";

export const Calculator = ({
  globalCalculatorState,
  calculatorIndex,
  setGlobalCalculatorState,
}) => {
  function createInputWheels() {
    return Object.entries(globalCalculatorState).map(([context, calculator]) => {
      return (
        <WheelInput
          ownState={{ [context]: calculator }}
          calculatorIndex={calculatorIndex}
          key={uuidv4()}
          setGlobalCalculatorState={setGlobalCalculatorState}
        />
      );
    });
  }

  return (
    <div className={Class("Calculator")}>
      <div className={Class("Calculator__Item Calculator__Input")}>
        {globalCalculatorState && createInputWheels()}
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

Calculator.defaultProps = {
  globalCalculatorState: {},
  calculatorIndex: 0,
  setGlobalCalculatorState: () => {},
};

Calculator.propTypes = {
  globalCalculatorState: PropTypes.PropTypes.objectOf(PropTypes.object),
  calculatorIndex: PropTypes.number,
  setGlobalCalculatorState: PropTypes.func,
};
