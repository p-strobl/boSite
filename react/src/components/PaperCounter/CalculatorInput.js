import React, { useState, useContext } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import { CalculatorContext } from "~context/CalculatorContext";

import "./CalculatorInput.scss";

export const CalculatorInput = ({ context, placeholder }) => {
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

    const validInput = numbersOnly(element, inputValue);

    if (validInput) {
      setInput(parseInt(element.target.value, 10));
    }
  };

  return (
    <input
      className={Class(`CalculatorInput`)}
      type="tel"
      placeholder={placeholder}
      alt={placeholder}
      onKeyUp={validateInput}
      title="Bitte nur Nummern eintragen."
    />
  );
};

CalculatorInput.defaultProps = {
  placeholder: PropTypes.string,
};

CalculatorInput.propTypes = {
  placeholder: PropTypes.string,
};
