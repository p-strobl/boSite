import React from "react";
import Class from "classnames";
import { useTitle } from "hookrouter";

import CheapestPriceStore from "~context/CheapestPriceContext";
import { Headline } from "~components/Headline";
import { CalculatorProvider } from "./CalculatorProvider";

import "./PaperCounter.scss";

export const PaperCounter = () => {
  useTitle("Bo's Paper Counter");

  return (
    <div className={Class("PaperCounter")}>
      <Headline h1="Paper Counter" h2="Vergleiche die Rollen Preise" emoji="" />
      <CheapestPriceStore>
        <CalculatorProvider />
        <CalculatorProvider />
      </CheapestPriceStore>
    </div>
  );
};
