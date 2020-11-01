import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import { useSetRecoilState, useRecoilValue } from "recoil";

import { wheel, calculator } from "~components/TissuePriceCompare/state";
import { WheelInputElement } from "~components/TissuePriceCompare/Calculator.Input.Wheel.Element";

export const WheelInputElements = ({ calculatorIndex, type }) => {
  const [ref, setRef] = useState(null);
  const wheelState = useRecoilValue(wheel[type]);
  const setCalculatorState = useSetRecoilState(calculator(calculatorIndex));

  let observer = null;

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
    addActiveClassToWheel(entry);
    setCalculatorState((prevState) => ({
      ...prevState,
      [type]: parseInt(entry.textContent, 10),
    }));
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
      {[...Array(wheelState.range + 1)].map((value, index) => {
        return <WheelInputElement value={index} key={uuidv4()} />;
      })}
    </div>
  );
};

WheelInputElements.defaultProps = {
  calculatorIndex: 0,
  type: "",
};

WheelInputElements.propTypes = {
  calculatorIndex: PropTypes.number,
  type: PropTypes.string,
};
