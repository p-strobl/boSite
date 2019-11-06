import React from "react";

import TissuePriceCalculatorContextStore from "~context/TissuePriceCalculatorContext";
import { TissuePriceCalculator } from "~components/TissuePriceCompare/TissuePriceCalculator";

export const TissuePriceCalculatorProvider = () => {
  return (
    <TissuePriceCalculatorContextStore>
      <TissuePriceCalculator />
    </TissuePriceCalculatorContextStore>
  );
};
