import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSetRecoilState } from "recoil";

import { price } from "~components/TissuePriceCompare/state";

import "./PriceInput.scss";

export const PriceInput = ({ calculatorIndex }) => {
  const setPriceState = useSetRecoilState(price(calculatorIndex));
  const [priceInput, setPriceInput] = useState("");

  function displayDecimalizeValue(inputValue) {
    const digitRegex = /\D/g;
    const decimalCommaRegex = /\B(?=(\d{2})(?!\d))/g;

    setPriceInput(inputValue.replace(digitRegex, "").replace(decimalCommaRegex, ","));
  }

  function numbersOnly(inputValue) {
    const numberRegex = /[^0-9,]/g;

    if (numberRegex.test(inputValue)) {
      setPriceInput(inputValue.replace(numberRegex, ""));
      return false;
    }

    return true;
  }

  function cleanNumberInput(validNumber) {
    return validNumber.replace(/[,]+/g, "").trim();
  }

  function validatePrice(inputValue) {
    const isValidNumber = numbersOnly(inputValue);

    if (!isValidNumber) {
      return false;
    }

    const cleanedValidNumber = cleanNumberInput(inputValue);

    setPriceState(cleanedValidNumber);
    displayDecimalizeValue(inputValue);

    return true;
  }

  const validateInput = (event) => {
    event.preventDefault();

    const inputValue = event.target.value;

    if (typeof inputValue === "undefined") {
      return;
    }

    validatePrice(inputValue);
  };

  return (
    <div className="PriceContainer">
      <input className="Price__Input" placeholder="Gesamtpreis eingeben" type="tel" onChange={validateInput} value={priceInput} />
    </div>
  );
};

PriceInput.defaultProps = {
  calculatorIndex: 0,
};

PriceInput.propTypes = {
  calculatorIndex: PropTypes.number,
};
