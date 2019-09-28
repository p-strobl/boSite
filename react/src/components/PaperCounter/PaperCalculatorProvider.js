import React from "react";

import CalculatorProvider from "~context/CalculatorContext";
import { PaperCalculator } from "~components/PaperCounter/PaperCalculator";

export const PaperCalculatorProvider = () => {
  return (
    <CalculatorProvider>
      <PaperCalculator />
    </CalculatorProvider>
  );
};
