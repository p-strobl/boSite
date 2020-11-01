import React from "react";
import Class from "classnames";
import uuidv4 from "uuid/v4";

import { useTitle } from "hookrouter";

import { Headline } from "~components/Headline";
import { Emoji } from "~components/Emoji";
import { Calculator } from "~components/TissuePriceCompare/Calculator";

import "./TissuePriceCompare.scss";

export const TissuePriceCompare = () => {
  useTitle("boSite's Tissue Calculator");

  const paperEmoji = <Emoji classs="TissuePriceCompareHeadline__" emojiClass="Emoji__Tissue" label="tissue" />;
  const headline = <h1 className={Class("TissuePriceCompare__Headline")}>Tissue Price Compare</h1>;
  const subHeadline = <h2 className={Class("TissuePriceCompare__SubHeadline")}>Vergleichen Sie die {paperEmoji} Preise</h2>;

  return (
    <div className={Class("TissuePriceCompare")}>
      <Headline parentClass="TissuePriceCompare" h1={headline} h2={subHeadline} />
      <div className={Class("TissuePriceCompare__CalculatorContainer")}>
        <Calculator key={uuidv4()} calculatorIndex={0} />
        <Calculator key={uuidv4()} calculatorIndex={1} />
      </div>
    </div>
  );
};
