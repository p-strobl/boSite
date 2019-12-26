import React, { useContext, useEffect } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";

import "./PriceOutput.scss";

export const PriceOutput = ({ totalPrice }) => {
  if (typeof totalPrice === "undefined") return false;

  const {
    rollCountContext: [, setRollerCount],
    sheetCountContext: [, setSheetCount],
    layerCountContext: [, setLayerCount],
    priceContext: [, setPrice],
    defaultValues,
  } = useContext(TissuePriceCalculatorContext);

  const calculatorSetter = {
    rollCount: setRollerCount,
    sheetCount: setSheetCount,
    layerCount: setLayerCount,
    price: setPrice,
  };

  const localePrice = totalPrice.toLocaleString("de-DE", {
    minimumFractionDigits: 6,
  });

  const determineCheapestPrice = () => {
    const calculatorOutput = Array.from(document.querySelectorAll(".PriceOutput__Container"));

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

  const setClassOnOutputElements = (cheapestElements) => {
    const tissueCalculator = Array.from(document.querySelectorAll(".Calculator"));

    const clearTissueCalculatorClasses = () => {
      tissueCalculator.forEach((outputElement) => {
        outputElement.classList.remove("Calculator--Lowest", "Calculator--Pricey");
      });
    };

    const addClassToCheapestElement = () => {
      cheapestElements.forEach(([element, price]) => {
        const parsedPrice = parseFloat(price);

        if (parsedPrice === 0) return;
        element.closest(".Calculator").classList.add("Calculator--Lowest");
      });
    };

    const addClassToPriceyElement = () => {
      const notCheapestElement = tissueCalculator.filter((element) => {
        return !element.classList.contains("Calculator--Lowest");
      });

      if (notCheapestElement.length !== 1) return;
      notCheapestElement[0].classList.add("Calculator--Pricey");
    };

    clearTissueCalculatorClasses();
    addClassToCheapestElement();
    addClassToPriceyElement();
  };

  const resetCalculatorView = (event) => {
    if (event.target.type !== "button") return;

    const outputContainer = event.target.closest(".PriceOutput__Output");
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

  const resetCalculatorState = () => {
    if (typeof calculatorSetter === "undefined" || typeof defaultValues === "undefined")
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

  const handleCalculatorReset = (event) => {
    if (event.target.type !== "button") return false;

    resetCalculatorState();
    resetCalculatorView(event);
    return true;
  };

  useEffect(() => {
    const filledOutputElements = determineCheapestPrice();
    setClassOnOutputElements(filledOutputElements);
  }, [localePrice]);

  return (
    <div
      className={Class("PriceOutput__Container", {
        "PriceOutput__Container--Show": totalPrice,
      })}>
      {localePrice}
      <span className={Class("PriceOutput__Currency")}>€</span>
      <span className={Class("PriceOutput__Text")}>pro Lage</span>
      <button
        aria-label="Clear Button"
        className={Class("PriceOutput__ClearButton")}
        onClick={handleCalculatorReset}
        type="button"
      />
    </div>
  );
};

PriceOutput.defaultProps = {
  totalPrice: 0,
};

PriceOutput.propTypes = {
  totalPrice: PropTypes.number,
};
