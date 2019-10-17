import React from "react";
import Class from "classnames";
import { useTitle } from "hookrouter";

import { Headline } from "~components/Headline";
import { CalculatorProvider } from "./CalculatorProvider";

import "./TissueCounter.scss";
import { Emoji } from "~components/Emoji";

export const TissueCounter = () => {
  useTitle("Bo's Tissue Counter");

  const emoji = <Emoji classs="TissueCounterHeadline__" emoji="🧻" label="heart" />;

  return (
    <div className={Class("TissueCounter")}>
      <div className="Headline">
        <div className="Headline__Container">
          <h1 className={Class("TissueCounter_Headline")}>Tissue Counter</h1>
          <h2 className={Class("TissueCounter_SubHeadline")}>
            Vergleiche Sie die <>{emoji}</> Preise
          </h2>
        </div>
      </div>
      <div className={Class("TissueCounter__CalculatorContainer")}>
        <CalculatorProvider />
        <CalculatorProvider />
      </div>
    </div>
  );
};
