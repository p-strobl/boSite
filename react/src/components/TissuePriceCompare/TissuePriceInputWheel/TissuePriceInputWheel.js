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

    this.observer = new IntersectionObserver(this.observerIsIntersecting, {
      root: this.inputWheelRef.current,
      threshold: [0.99],
    });
  }

  componentDidMount() {
    this.wheel = this.inputWheelRef.current.querySelectorAll(".TissueInputWheel__Number");
    this.initIntersectionObserver();
  }

  componentWillUnmount() {
    this.clearInputWheelObserver();
  }

  initIntersectionObserver = () => {
    this.wheel.forEach((element) => {
      this.observer.observe(element);
    });
  };

  observerIsIntersecting = (entry) => {
    if (entry.isIntersecting && entry[0].intersectionRatio <= 0) return;

    this.handleActiveWheelElement(entry);
  };

  handleActiveWheelElement = (entry) => {
    this.clearInputWheelClass(this.wheel);
    const { getWheelInput } = this.props;
    // console.log("entry:", parseInt(entry[0].target.textContent, 10));
    entry[0].target.classList.add("TissueInputWheel__Number--Active");
    getWheelInput(parseInt(entry[0].target.textContent, 10));
  };

  clearInputWheelClass = () => {
    this.wheel.forEach((element) => {
      element.classList.remove("TissueInputWheel__Number--Active");
    });
  };

  clearInputWheelObserver = () => {
    this.wheel.forEach((element) => {
      this.observer.unobserve(element);
    });
  };

  render() {
    const { defaultValue, range } = this.props;

    return (
      <div className={Class("TissueInputWheel")} key={uuidv4()} ref={this.inputWheelRef}>
        <ArrowButton direction="Up" />
        <WheelElements defaultValue={defaultValue} range={range} />
        <ArrowButton direction="Down" />
      </div>
    );
  }
}

TissuePriceInputWheel.defaultProps = {
  defaultValue: 0,
  getWheelInput: () => {},
  range: 0,
};

TissuePriceInputWheel.propTypes = {
  defaultValue: PropTypes.number,
  getWheelInput: PropTypes.func,
  range: PropTypes.number,
};
