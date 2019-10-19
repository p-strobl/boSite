import React, { useContext } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { validate } from "./TissuePriceCompareController";

import "./TissuePriceCalculatorInput.scss";

export const TissuePriceCalculatorInput = ({ context, placeholder, type }) => {
  const {
    [context]: [input, setInput],
  } = useContext(TissuePriceCalculatorContext);

  const validateInput = (clickedElement) => {
    setInput(validate(clickedElement, type));
  };

  const onFocus = (inputFocus) => {
    console.log("inputFocus.target", inputFocus.target.value.length);
    if (inputFocus.target.alt !== "Preis") return;

    inputFocus.target.value = "0,00";
  };

  return (
    <input
      alt={placeholder}
      className={Class(`TissuePriceCalculatorInput`)}
      onKeyUp={validateInput}
      placeholder={placeholder}
      title="Bitte nur Zahlen eingeben."
      type="tel"
    />
  );
};

TissuePriceCalculatorInput.defaultProps = {
  context: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

TissuePriceCalculatorInput.propTypes = {
  context: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
