import React from "react";
import Class from "classnames";
import { useTitle } from "hookrouter";

import { Headline } from "~components/Headline";
import { CalculatorProvider } from "./CalculatorProvider";

import "./TissueCounter.scss";
import { Emoji } from "~components/Emoji";

export const TissueCounter = () => {
  useTitle("Bo's Tissue Counter");

  return (
    <div className={Class("TissueCounter")}>
      <Headline
        parentClass="TissueCounter"
        h1="Tissue Counter"
        h2="Vergleiche die Rollen Preise"
        emoji={<Emoji emoji="🧻" label="heart" classs="Headline__" />}
      />
      <div className={Class("TissueCounter__CalculatorContainer")}>
        <CalculatorProvider />
        <CalculatorProvider />
      </div>
    </div>
  );
};
