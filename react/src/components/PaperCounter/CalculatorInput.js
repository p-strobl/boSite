import React, { useState, useContext } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import { CalculatorContext } from "~context/CalculatorContext";

import "./CalculatorInput.scss";

export const CalculatorInput = ({ context, placeholder, type }) => {
  const {
    [context]: [input, setInput],
  } = useContext(CalculatorContext);

  const numbersOnly = (element, inputValue) => {
    const numberRegex = /[^0-9,]/g;
    if (numberRegex.test(inputValue)) {
      element.target.value = inputValue.replace(numberRegex, "");
      return false;
    }
    return true;
  };

  const validateInput = (element) => {
    const inputValue = element.target.value;

    if (inputValue.length === 0) {
      return;
    }

    const inputIsValid = numbersOnly(element, inputValue);

    if (inputIsValid) {
      console.log("inputValue", inputValue);
      setInput(parseInt(element.target.value, 10));
      if (type === "price") {
        element.target.value = inputValue
          .replace(/\D/g, "")
          .replace(/\B(?=(\d{2})(?!\d))/g, ",");
      }
    }
  };

  return (
    <input
      className={Class(`CalculatorInput`)}
      type="tel"
      placeholder={placeholder}
      alt={placeholder}
      onKeyUp={validateInput}
      title="Bitte nur Nummern eingeben."
    />
  );
};

CalculatorInput.defaultProps = {
  context: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

CalculatorInput.propTypes = {
  context: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
