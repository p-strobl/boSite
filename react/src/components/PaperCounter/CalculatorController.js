export const calculatePrice = (rollCount, sheetCount, layerCount, price) => {
  if (rollCount > 0 && sheetCount > 0 && layerCount > 0 && price > 0) {
    const totalLayerCount = rollCount * sheetCount * layerCount;
    const singleLayerPrice = price / totalLayerCount;

    return singleLayerPrice.toFixed(6) / 100;
  }

  return 0;
};

export const determineCheapestPrice = () => {
  const calculatorOutput = Array.from(
    document.querySelectorAll(".CalculatorOutput"),
  );

  const getCheapestPrice = () => {
    return calculatorOutput.reduce((acc, current) =>
      current.textContent < acc.textContent
        ? [current, current.textContent]
        : [acc, acc.textContent],
    );
  };

  return getCheapestPrice();
};

export const setClassOnCheapestPriceElement = ([element, price]) => {
  const commaRegex = /,/g;
  const dotRegex = ".";
  const euroRegex = /[€]+/g;
  const parsedPrice = price
    .replace(commaRegex, dotRegex)
    .replace(euroRegex, "");

  if (parseFloat(parsedPrice) <= 0) {
    return false;
  }

  const calculatorOutput = Array.from(
    document.querySelectorAll(".CalculatorOutput"),
  );

  calculatorOutput.forEach((outputElement) => {
    outputElement.classList.remove("CalculatorInput--Cheapest");
  });

  element.classList.add("CalculatorInput--Cheapest");
};
