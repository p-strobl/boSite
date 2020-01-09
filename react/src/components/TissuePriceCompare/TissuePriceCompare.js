import React, { useEffect } from "react";
import Class from "classnames";
import { useTitle } from "hookrouter";

import { Headline } from "~components/Headline";
import TissuePriceCalculatorContextStore from "~context/TissuePriceCalculatorContext";

import { Emoji } from "~components/Emoji";

import "./TissuePriceCompare.scss";
import { Calculator } from "~components/TissuePriceCompare/Calculator";

export const TissuePriceCompare = () => {
  useTitle("boSite's Tissue Calculator");

  const emoji = (
    <Emoji classs="TissuePriceCompareHeadline__" emojiClass="Emoji__Tissue" label="tissue" />
  );
  const headline = <h1 className={Class("TissuePriceCompare__Headline")}>Tissue Price Compare</h1>;
  const subHeadline = (
    <h2 className={Class("TissuePriceCompare__SubHeadline")}>Vergleichen Sie die {emoji} Preise</h2>
  );

  return (
    <div className={Class("TissuePriceCompare")}>
      <Headline parentClass="TissuePriceCompare" h1={headline} h2={subHeadline} />
      <div className={Class("TissuePriceCompare__CalculatorContainer")}>
        <TissuePriceCalculatorContextStore>
          <Calculator />
        </TissuePriceCalculatorContextStore>
        <TissuePriceCalculatorContextStore>
          <Calculator />
        </TissuePriceCalculatorContextStore>
      </div>
    </div>
  );
};
