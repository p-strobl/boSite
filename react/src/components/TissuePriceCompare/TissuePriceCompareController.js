export const numbersOnly = (element, inputValue) => {
  const numberRegex = /[^0-9,]/g;

  if (numberRegex.test(inputValue)) {
    element.target.value = inputValue.replace(numberRegex, "");
    return false;
  }
  return true;
};

export const validatePrice = (element) => {
  const inputValue = element.target.value;

  if (inputValue.length === 0) return false;

  const inputIsValid = numbersOnly(element, inputValue);

  if (inputIsValid) {
    const digitRegex = /\D/g;
    const decimalCommaRegex = /\B(?=(\d{2})(?!\d))/g;

    element.target.value = inputValue
      .replace(digitRegex, "")
      .replace(decimalCommaRegex, ",");

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
    document.querySelectorAll(".TissuePriceCalculatorOutput"),
  );

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
  const tissueCalculator = Array.from(
    document.querySelectorAll(".TissuePriceCalculator"),
  );

  const clearTissueCalculatorClasses = () => {
    tissueCalculator.forEach((outputElement) => {
      outputElement.classList.remove(
        "TissuePriceCalculator--Lowest",
        "TissuePriceCalculator--Pricey",
      );
    });
  };

  const addClassToCheapestElement = () => {
    cheapestElements.forEach(([element, price]) => {
      const parsedPrice = parseFloat(price);

      if (parsedPrice === 0) return;
      element
        .closest(".TissuePriceCalculator")
        .classList.add("TissuePriceCalculator--Lowest");
    });
  };

  const addClassToPriceyElement = () => {
    const notCheapestElement = tissueCalculator.filter((element) => {
      return !element.classList.contains("TissuePriceCalculator--Lowest");
    });

    if (notCheapestElement.length !== 1) return;
    notCheapestElement[0].classList.add("TissuePriceCalculator--Pricey");
  };

  clearTissueCalculatorClasses();
  addClassToCheapestElement();
  addClassToPriceyElement();
};

export const resetCalculatorView = (event) => {
  if (event.target.type !== "button") return;

  const outputContainer = event.target.closest(
    ".TissuePriceCalculatorOutputContainer",
  );
  const inputContainer = outputContainer.previousSibling;

  const resetInputTypeRange = () => {
    const inputTypeRange = inputContainer.querySelectorAll("input[type=range]");
    Array.from(inputTypeRange).forEach((slider) => {
      slider.value = slider.dataset.default;
    });
  };

  const resetInputTypeTel = () => {
    const inputTypeTel = inputContainer.querySelectorAll("input[type=tel]");
    Array.from(inputTypeTel).forEach((telInput) => {
      telInput.value = telInput.dataset.default.toLocaleString("de-DE", {
        minimumFractionDigits: 3,
      });
    });
  };

  resetInputTypeRange();
  resetInputTypeTel();
};

export const resetCalculatorState = (calculatorSetter, defaultValues) => {
  if (
    typeof calculatorSetter === "undefined" ||
    typeof defaultValues === "undefined"
  )
    return false;

  Object.entries(defaultValues).forEach(([defaultKey, defaultValue]) => {
    const setter = Object.entries(calculatorSetter).find(
      ([setterKey]) => defaultKey === setterKey,
    );
    setter[1](defaultValue);
    return true;
  });
  return false;
};
