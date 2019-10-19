import React from "react";

import TissuePriceCalculatorStore from "~context/TissuePriceCalculatorContext";
import { TissuePriceCalculator } from "~components/TissuePriceCompare/TissuePriceCalculator";

export const TissuePriceCalculatorProvider = () => {
  return (
    <TissuePriceCalculatorStore>
      <TissuePriceCalculator />
    </TissuePriceCalculatorStore>
  );
};
