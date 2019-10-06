import { CalculatorProvider } from "./CalculatorProvider";
/**
 * Replace all non numbers.
 * @exports numbersOnly
 */
export const numbersOnly = (element, inputValue) => {
  const numberRegex = /[^0-9,]/g;

  if (numberRegex.test(inputValue)) {
    element.target.value = inputValue.replace(numberRegex, "");
    return false;
  }
  return true;
};

export const validate = (element, type) => {
  const inputValue = element.target.value;

  if (inputValue.length === 0) return false;

  const inputIsValid = numbersOnly(element, inputValue);

  if (inputIsValid) {
    if (type === "price") {
      const digitRegex = /\D/g;
      const decimalCommaRegex = /\B(?=(\d{2})(?!\d))/g;

      element.target.value = inputValue
        .replace(digitRegex, "")
        .replace(decimalCommaRegex, ",");
    }
    return parseFloat(inputValue);
  }
  return false;
};

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

  const parsedElement = [];

  calculatorOutput.forEach((element, index) => {
    const commaRegex = /,/g;
    const dotRegex = ".";
    const euroRegex = /[€]+/g;
    const parsedPrice = element.textContent
      .replace(commaRegex, dotRegex)
      .replace(euroRegex, "");

    parsedElement.push([element, parsedPrice]);
  });

  const cheapestElement = parsedElement.reduce((acc, current) => {
    return current[1] < acc[1] ? current : acc;
  });

  return parsedElement.filter((element) => {
    return element[1] === cheapestElement[1];
  });
};

export const setClassOnCheapestElement = (cheapestElements) => {
  const calculatorOutput = Array.from(
    document.querySelectorAll(".CalculatorOutput"),
  );

  calculatorOutput.forEach((outputElement) => {
    outputElement.classList.remove("CalculatorOutput--Cheapest");
  });

  cheapestElements.forEach(([element, price]) => {
    const elementPrice = parseFloat(price);

    if (elementPrice === 0) {
      return false;
    }

    element.classList.add("CalculatorOutput--Cheapest");
    return true;
  });
};

export const showAddButton = () => {
  const paperCalculator = document.querySelectorAll(".PaperCalculator");

  paperCalculator.forEach((element) => {
    element.classList.remove("AddPaperCalculator--Show");
  });

  if (paperCalculator.length < 3) {
    const lastPaperCalculator = paperCalculator[paperCalculator.length - 1];
    const lastPaperCalculatorButton = lastPaperCalculator.querySelector(
      "button",
    );

    lastPaperCalculatorButton.classList.add("AddPaperCalculator--Show");
  }
};

export const addPaperCalculator = () => {
  const paperCounterContainer = document.querySelector(".PaperCounter");

  // paperCounter.appendChild(CalculatorProvider);
  console.log("paperCounterContainer", paperCounterContainer);
  // if (paperCalculator.length >= 3) return false;

  return true;
};
