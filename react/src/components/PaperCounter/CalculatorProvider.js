import React from "react";

import CalculatorStore from "~context/CalculatorContext";
import { PaperCalculator } from "~components/PaperCounter/PaperCalculator";

export const CalculatorProvider = () => {
  return (
    <CalculatorStore>
      <PaperCalculator />
    </CalculatorStore>
  );
};
