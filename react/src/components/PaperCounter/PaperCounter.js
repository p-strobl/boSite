import React from "react";
import Class from "classnames";
import { useTitle } from "hookrouter";

import { Headline } from "~components/Headline";
import { CalculatorProvider } from "./CalculatorProvider";

import "./PaperCounter.scss";
import { Emoji } from "~components/Emoji";

export const PaperCounter = () => {
  useTitle("Bo's Paper Counter");

  return (
    <div className={Class("PaperCounter")}>
      <Headline
        parentClass="PaperCounter"
        h1="Paper Counter"
        h2="Vergleiche die Rollen Preise"
        emoji={<Emoji emoji="🧻" label="heart" classs="Headline__" />}
      />
      <div className={Class("PaperCounter__CalculatorContainer")}>
        <CalculatorProvider />
        <CalculatorProvider />
      </div>
    </div>
  );
};
