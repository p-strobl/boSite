import React, { useContext, useEffect } from "react";
import Class from "classnames";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./TissuePriceInputWheel.scss";
import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";

export const TissuePriceInputWheel = ({ context, range }) => {
  const {
    [context]: [input, setInput],
  } = useContext(TissuePriceCalculatorContext);

  const componentSelfRef = React.createRef();

  const clickedWheelElement = (event) => {
    event.target.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const clickedUpArrow = (event) => {
    console.log("Up", event.target);
  };

  const clickedDownArrow = (event) => {
    console.log("Down", event.target);
  };

  const initIntersectionObserver = () => {
    const config = {
      root: componentSelfRef.current,
      threshold: [0.99],
    };

    const observer = new IntersectionObserver((entry) => {
      if (entry.isIntersecting && entry[0].intersectionRatio <= 0) return;

      console.log("entry:", entry[0].target.textContent);
      entry[0].target.classList.add("bla");
    }, config);

    const wheelNumbers = componentSelfRef.current.querySelectorAll(".TissueInputWheel__Number");

    wheelNumbers.forEach((numberWheel) => {
      observer.observe(numberWheel);
    });
    console.log("observer", observer);
  };

  const WheelElements = () => {
    const wheelRange = [];

    for (let i = 0; i < range + 1; i += 1) {
      wheelRange.push(
        <div
          className="TissueInputWheel__Number"
          key={uuidv4()}
          onClick={clickedWheelElement}
          onKeyUp={() => {}}
          role="button"
          tabIndex={0}>
          {i}
        </div>,
      );
    }

    return <div className="TissueInputWheel__Container">{wheelRange || ""}</div>;
  };

  const ClickUpDownButton = ({ direction }) => {
    return (
      <button
        className={`TissueInputWheel__Button TissueInputWheel__Button--${direction}`}
        onClick={direction === "Up" ? clickedUpArrow : clickedDownArrow}
        onKeyUp={() => {}}
        type="button"
        tabIndex={0}
        aria-label={direction}
      />
    );
  };

  useEffect(() => {
    initIntersectionObserver();
  }, []);

  return (
    <div className={Class("TissueInputWheel")} key={uuidv4()} ref={componentSelfRef}>
      <ClickUpDownButton direction="Up" />
      <WheelElements />
      <ClickUpDownButton direction="Down" />
    </div>
  );
};

TissuePriceInputWheel.defaultProps = {
  context: "",
  range: 0,
};

TissuePriceInputWheel.propTypes = {
  context: PropTypes.string,
  range: PropTypes.number,
};
