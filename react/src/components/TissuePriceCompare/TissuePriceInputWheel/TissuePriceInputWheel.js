import React, { Component } from "react";
import Class from "classnames";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./TissuePriceInputWheel.scss";
import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { ArrowButton } from "./ArrowButton";
import { WheelElements } from "./WheelElements";

export class TissuePriceInputWheel extends Component {
  constructor(props) {
    super(props);
    this.inputWheelRef = React.createRef();

    this.observer = new IntersectionObserver(this.observeWheel, {
      root: this.inputWheelRef.current,
      threshold: [0.99],
    });
  }

  componentDidMount() {
    this.wheelNumbers = this.inputWheelRef.current.querySelectorAll(".TissueInputWheel__Number");
    this.initIntersectionObserver();
  }

  componentWillUnmount() {
    this.clearInputWheelObserver();
  }

  initIntersectionObserver = () => {
    this.wheelNumbers.forEach((numberWheel) => {
      this.observer.observe(numberWheel);
    });
  };

  observeWheel = (entry) => {
    if (entry.isIntersecting && entry[0].intersectionRatio <= 0) return;

    this.handleActiveWheelElement(entry);
  };

  handleActiveWheelElement = (entry) => {
    const wheelNumbers = this.inputWheelRef.current.querySelectorAll(".TissueInputWheel__Number");

    this.clearInputWheelClass(wheelNumbers);
    console.log("entry:", parseInt(entry[0].target.textContent, 10));
    entry[0].target.classList.add("TissueInputWheel__Number--Active");
  };

  clearInputWheelClass = () => {
    this.wheelNumbers.forEach((numberWheel) => {
      numberWheel.classList.remove("TissueInputWheel__Number--Active");
    });
  };

  clearInputWheelObserver = () => {
    this.wheelNumbers.forEach((numberWheel) => {
      this.observer.unobserve(numberWheel);
    });
  };

  render() {
    const { range } = this.props;

    return (
      <div className={Class("TissueInputWheel")} key={uuidv4()} ref={this.inputWheelRef}>
        <ArrowButton direction="Up" />
        <WheelElements range={range} />
        <ArrowButton direction="Down" />
      </div>
    );
  }
}

TissuePriceInputWheel.defaultProps = {
  range: 0,
};

TissuePriceInputWheel.propTypes = {
  range: PropTypes.number,
};
