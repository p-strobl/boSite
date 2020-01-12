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
  let observer = null;

  function focusDefaultValue() {
    if (typeof defaultValue === "undefined") return;

    wheel[defaultValue].focus();
  }

  function clearInputWheelClass(entryWheel) {
    const elementWheel = entryWheel.querySelectorAll(".Wheel__Number");
    elementWheel.forEach((element) => {
      element.classList.remove("Wheel__Number--Active");
    });
  }

  function handleActiveWheelElement(entry) {
    const entryParent = entry.parentNode;

    clearInputWheelClass(entryParent);
    entry.classList.add("Wheel__Number--Active");
  }

  function observerIsIntersecting(entries) {
    if (typeof entries === "undefined") return;
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const entryContext = entry.target.closest(".WheelContainer").dataset.context;

        handleActiveWheelElement(entry.target);
        // console.log("entry.target", entry.target.closest(".WheelContainer").dataset.context);
        // this.getWheelInput(parseInt(entry.target.textContent, 10), this.setter);
      }
    });
  }

  function initIntersectionObserver() {
    observer = new IntersectionObserver(observerIsIntersecting, {
      root: inputWheelRef.current,
      threshold: [0.9],
    });

    wheel.forEach((element) => {
      observer.observe(element);
    });
  }

  function clearInputWheelObserver() {
    wheel.forEach((element) => {
      observer.unobserve(element);
    });
  }

  useEffect(() => {
    wheel = inputWheelRef.current.querySelectorAll(".Wheel__Number");

    focusDefaultValue();

    return () => {
      clearInputWheelObserver();
    };
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
