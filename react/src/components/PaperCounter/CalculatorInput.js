import React, { useContext } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import { CalculatorContext } from "~context/CalculatorContext";
import { validate } from "./CalculatorController";

import "./CalculatorInput.scss";

export const CalculatorInput = ({ context, placeholder, type }) => {
  const {
    [context]: [input, setInput],
  } = useContext(CalculatorContext);

  const validateInput = (clickedElement) => {
    setInput(validate(clickedElement, type));
  };

  return (
    <input
      className={Class(`CalculatorInput`)}
      type="tel"
      placeholder={placeholder}
      alt={placeholder}
      onKeyUp={validateInput}
      title="Bitte nur Zahlen eingeben."
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
