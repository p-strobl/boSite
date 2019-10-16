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

      element.target.value = inputValue.replace(digitRegex, "").replace(decimalCommaRegex, ",");
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
  const calculatorOutput = Array.from(document.querySelectorAll(".CalculatorOutput"));

  const parsedElement = [];

  calculatorOutput.forEach((element) => {
    const commaRegex = /,/g;
    const dotRegex = ".";
    const euroRegex = /[€]+/g;
    const layerRegex = /pro Lage/g;
    const parsedPrice = element.textContent
      .replace(commaRegex, dotRegex)
      .replace(euroRegex, "")
      .replace(layerRegex, "");

    parsedElement.push([element, parseFloat(parsedPrice)]);
  });

  const cheapestElement = parsedElement.reduce((acc, current) => {
    return current[1] < acc[1] ? current : acc;
  });

  return parsedElement.filter((element) => {
    return element[1] === cheapestElement[1];
  });
};

export const setClassOnOutputElements = (cheapestElements) => {
  const tissueCalculator = Array.from(document.querySelectorAll(".TissueCalculator"));

  const clearTissueCalculatorClasses = () => {
    tissueCalculator.forEach((outputElement) => {
      outputElement.classList.remove("TissueCalculator--Lowest", "TissueCalculator--Pricey");
    });
  };

  const addClassToCheapestElement = () => {
    cheapestElements.forEach(([element, price]) => {
      const parsedPrice = parseFloat(price);

      if (parsedPrice === 0) return;
      element.closest(".TissueCalculator").classList.add("TissueCalculator--Lowest");
    });
  };

  const addClassToPriceyElement = () => {
    const notCheapestElement = tissueCalculator.filter((element) => {
      return !element.classList.contains("TissueCalculator--Lowest");
    });

    if (notCheapestElement.length !== 1) return;
    notCheapestElement[0].classList.add("TissueCalculator--Pricey");
  };

  clearTissueCalculatorClasses();
  addClassToCheapestElement();
  addClassToPriceyElement();
};

export const resetCalculatorView = (event) => {
  if (event.target.type !== "button") return;

  const outputContainer = event.target.closest(".CalculatorOutputContainer");
  const inputContainer = outputContainer.previousSibling;
  const containerInputs = Array.from(inputContainer.children);

  containerInputs.forEach((input) => {
    input.value = "";
  });

  containerInputs[0].focus();
};
