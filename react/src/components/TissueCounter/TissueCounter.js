import React from "react";
import Class from "classnames";
import { useTitle } from "hookrouter";

import { Headline } from "~components/Headline";
import { CalculatorProvider } from "./CalculatorProvider";
import { Emoji } from "~components/Emoji";

import "./TissueCounter.scss";

export const TissueCounter = () => {
  useTitle("boSite's Tissue Counter");

  const emojiTissue = <Emoji classs="TissueCounterHeadline__" emojiClass="Emoji__Tissue" label="tissue" />;
  const headline = <h1 className={Class("TissueCounter_Headline")}>Tissue Counter</h1>;
  const subHeadline = <h2 className={Class("TissueCounter_SubHeadline")}>Vergleichen Sie die {emojiTissue} Preise</h2>;

  return (
    <div className={Class("TissueCounter")}>
      <Headline parentClass="TissueCounter" h1={headline} h2={subHeadline} />
      <div className={Class("TissueCounter__CalculatorContainer")}>
        <CalculatorProvider />
        <CalculatorProvider />
      </div>
    </div>
  );
};
