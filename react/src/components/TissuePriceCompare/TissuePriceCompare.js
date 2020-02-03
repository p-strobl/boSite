import React, { useEffect, useState } from "react";
import Class from "classnames";
import uuidv4 from "uuid/v4";

import { useTitle } from "hookrouter";

import { Headline } from "~components/Headline";
import { Emoji } from "~components/Emoji";
import { Calculator } from "~components/TissuePriceCompare/Calculator";

import "./TissuePriceCompare.scss";

export const TissuePriceCompare = () => {
  useTitle("boSite's Tissue Calculator");

  const [priceCompareState, setPriceCompareState] = useState([
    {
      wheel: {
        roll: {
          value: 10,
          range: 20,
        },
        sheets: {
          value: 120,
          range: 200,
        },
        layer: {
          value: 3,
          range: 5,
        },
        price: {
          value: 0,
        },
      },
    },
    {
      wheel: {
        roll: {
          value: 10,
          range: 20,
        },
        sheets: {
          value: 120,
          range: 200,
        },
        layer: {
          value: 3,
          range: 5,
        },
        price: {
          value: 0,
        },
      },
    },
  ]);

  console.log("priceCompareState", priceCompareState);

  const emoji = (
    <Emoji classs="TissuePriceCompareHeadline__" emojiClass="Emoji__Tissue" label="tissue" />
  );
  const headline = <h1 className={Class("TissuePriceCompare__Headline")}>Tissue Price Compare</h1>;
  const subHeadline = (
    <h2 className={Class("TissuePriceCompare__SubHeadline")}>Vergleichen Sie die {emoji} Preise</h2>
  );

  const setGlobalState = (value) => {
    console.log("CalculatorState", value);
  };

  const createCalculator = () => {
    // console.log("priceCompareState", priceCompareState);
    return priceCompareState.map((calculator, index) => {
      console.log("calculator.wheel", calculator.wheel);
      return (
        <Calculator
          key={uuidv4()}
          globalCalculatorState={calculator.wheel}
          calculatorIndex={index}
          setGlobalCalculatorState={setPriceCompareState}
        />
      );
    });
  };

  return (
    <div className={Class("TissuePriceCompare")}>
      <Headline parentClass="TissuePriceCompare" h1={headline} h2={subHeadline} />
      <div className={Class("TissuePriceCompare__CalculatorContainer")}>{createCalculator()}</div>
    </div>
  );
};
