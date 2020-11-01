import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import { useRecoilState, useSetRecoilState } from "recoil";

import { wheel, calculator } from "../state";

export const Wheel = ({ calculatorIndex, type }) => {
  const [ref, setRef] = useState(null);
  const [wheelState, setWheelState] = useRecoilState(wheel[type](calculatorIndex));
  const setCalculatorState = useSetRecoilState(calculator(calculatorIndex));

  let observer = null;

  function clickedWheelElement(event) {
    event.target.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  function focusInitialValue() {
    if (typeof wheelState === "undefined") {
      return;
    }

    const wheelElements = ref.querySelectorAll(".Wheel__Number");

    wheelElements[wheelState.value].scrollIntoView({ behavior: "smooth", block: "end" });
  }

  function removeActiveClassFromAllWheels(entry) {
    if (typeof entry === "undefined") {
      return;
    }

    const currentWheelElements = entry.parentNode.querySelectorAll(".Wheel__Number");

    currentWheelElements.forEach((element) => {
      element.classList.remove("Wheel__Number--Active");
    });
  }

  function addActiveClassToWheel(entry) {
    if (typeof entry === "undefined") {
      return;
    }

    entry.classList.add("Wheel__Number--Active");
  }

  function handleWheelIntersection(entry) {
    if (typeof entry === "undefined") {
      return;
    }

    removeActiveClassFromAllWheels(entry);
    setCalculatorState((prevState) => ({
      ...prevState,
      [type]: parseInt(entry.textContent, 10),
    }));
    // setWheelState(parseInt(entry.textContent, 10));
    addActiveClassToWheel(entry);
  }

  function observerIsIntersecting(entries) {
    if (typeof entries === "undefined") {
      return;
    }

    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      handleWheelIntersection(entry.target);
    });
  }

  function initIntersectionObserver() {
    const wheelElements = ref.querySelectorAll(".Wheel__Number");

    observer = new IntersectionObserver(observerIsIntersecting, {
      root: ref.current,
      threshold: [0.9],
    });

    wheelElements.forEach((element) => {
      if (typeof element === "undefined") {
        return;
      }

      observer.observe(element);
    });
  }

  function clearInputWheelObserver() {
    const wheelElements = ref.querySelectorAll(".Wheel__Number");

    wheelElements.forEach((element) => {
      if (typeof element === "undefined") {
        return;
      }

      observer.unobserve(element);
    });
  }

  function Wheels() {
    const wheelRange = [];

    for (let i = 0; i < wheelState.range + 1; i += 1) {
      wheelRange.push(
        <div
          className="Wheel__Number"
          onClick={clickedWheelElement}
          onKeyUp={() => {}}
          role="button"
          tabIndex={i}
          key={uuidv4()}>
          {i}
        </div>,
      );
    }

    return wheelRange;
  }

  useEffect(() => {
    if (ref) {
      initIntersectionObserver();
      focusInitialValue();
    }

    return () => {
      if (ref) {
        clearInputWheelObserver();
      }
    };
  }, [ref]);

  return (
    <div className="Wheel" ref={setRef}>
      <Wheels />
    </div>
  );
};

Wheel.defaultProps = {
  calculatorIndex: 0,
  type: "",
};

Wheel.propTypes = {
  calculatorIndex: PropTypes.number,
  type: PropTypes.string,
};
