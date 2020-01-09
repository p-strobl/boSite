import React, { useEffect, useRef } from "react";
import Class from "classnames";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./WheelInput.scss";
import { ArrowButton } from "./ArrowButton";
import { WheelElements } from "./WheelElements";

export const WheelInput = ({ context, defaultValue, range }) => {
  const inputWheelRef = useRef(null);
  let wheel = null;

  function focusDefaultValue() {
    if (typeof defaultValue === "undefined") return;

    wheel[defaultValue].focus();
  }

  useEffect(() => {
    wheel = inputWheelRef.current.querySelectorAll(".Wheel__Number");

    focusDefaultValue();
  }, []);

  return (
    <div
      className={Class("WheelContainer")}
      key={uuidv4()}
      ref={inputWheelRef}
      data-context={context}>
      <ArrowButton direction="Prev" wheel={inputWheelRef} />
      <WheelElements defaultValue={defaultValue} range={range} />
      <ArrowButton direction="Next" wheel={inputWheelRef} />
    </div>
  );
};

WheelInput.defaultProps = {
  context: "",
  defaultValue: 0,
  range: 0,
};

WheelInput.propTypes = {
  context: PropTypes.string,
  defaultValue: PropTypes.number,
  range: PropTypes.number,
};
