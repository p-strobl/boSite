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

  const emoji = (
    <Emoji classs="TissuePriceCompareHeadline__" emojiClass="Emoji__Tissue" label="tissue" />
  );
  const headline = <h1 className={Class("TissuePriceCompare__Headline")}>Tissue Price Compare</h1>;
  const subHeadline = (
    <h2 className={Class("TissuePriceCompare__SubHeadline")}>Vergleichen Sie die {emoji} Preise</h2>
  );

  // const calculatePrice = () => {
  //   if (rollCount === 0 || sheetCount === 0 || layerCount === 0 || price === 0) return 0;
  //
  //   const totalLayerCount = rollCount * sheetCount * layerCount;
  //   const singleLayerPrice = price / totalLayerCount;
  //
  //   return singleLayerPrice.toFixed(6) / 100;
  // };
  //
  // const toLocalPrice = (value) => {
  //   if (value === 0) return;
  //
  //   setLocalPrice(
  //     value.toLocaleString("de-DE", {
  //       minimumFractionDigits: 6,
  //     }),
  //   );
  // };

  const setGlobalState = (wheelValue) => {
    console.log("wheelValue", wheelValue);
    console.log("priceCompareState", priceCompareState);
  };

  const createCalculator = () => {
    return priceCompareState.map((calculator, index) => {
      return (
        <Calculator
          key={uuidv4()}
          globalCalculatorState={calculator.wheel}
          calculatorIndex={index}
          setGlobalCalculatorState={setGlobalState}
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
