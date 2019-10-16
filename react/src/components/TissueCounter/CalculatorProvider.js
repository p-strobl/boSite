import React from "react";

import CalculatorStore from "~context/CalculatorContext";
import { TissueCalculator } from "~components/TissueCounter/TissueCalculator";

export const CalculatorProvider = () => {
  return (
    <CalculatorStore>
      <TissueCalculator />
    </CalculatorStore>
  );
};
