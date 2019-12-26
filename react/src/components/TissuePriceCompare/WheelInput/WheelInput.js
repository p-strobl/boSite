import React, { Component } from "react";
import Class from "classnames";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./WheelInput.scss";
import { ArrowButton } from "./ArrowButton";
import { WheelElements } from "./WheelElements";

export class WheelInput extends Component {
  constructor(props) {
    super(props);

    this.inputWheelRef = React.createRef();
    this.wheel = null;
    this.observer = new IntersectionObserver(this.observerIsIntersecting, {
      root: this.inputWheelRef.current,
      threshold: [0.75],
    });
  }

  componentDidMount() {
    const { defaultValue } = this.props;

    this.wheel = this.inputWheelRef.current.querySelectorAll(".Wheel__Number");
    this.initIntersectionObserver();
    this.focusDefaultValue(defaultValue);
  }

  componentWillUnmount() {
    this.clearInputWheelObserver();
  }

  focusDefaultValue = (defaultValue) => {
    if (typeof defaultValue === "undefined") return;

    this.wheel[defaultValue].focus();
  };

  initIntersectionObserver = () => {
    this.wheel.forEach((element) => {
      this.observer.observe(element);
    });
  };

  observerIsIntersecting = (entries) => {
    if (typeof entries === "undefined") return;
    const { getWheelInput, setter } = this.props;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.handleActiveWheelElement(entry.target);
        getWheelInput(parseInt(entry.target.textContent, 10), setter);
      }
    });
  };

  handleActiveWheelElement = (entry) => {
    this.clearInputWheelClass(this.wheel);
    entry.classList.add("Wheel__Number--Active");
  };

  clearInputWheelClass = () => {
    this.wheel.forEach((element) => {
      element.classList.remove("Wheel__Number--Active");
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
      <div className={Class("WheelContainer")} key={uuidv4()} ref={this.inputWheelRef}>
        <ArrowButton direction="Prev" wheel={this.inputWheelRef} />
        <WheelElements defaultValue={defaultValue} range={range} />
        <ArrowButton direction="Next" wheel={this.inputWheelRef} />
      </div>
    );
  }
}

WheelInput.defaultProps = {
  defaultValue: 0,
  getWheelInput: () => {},
  setter: "",
  range: 0,
};

WheelInput.propTypes = {
  defaultValue: PropTypes.number,
  getWheelInput: PropTypes.func,
  setter: PropTypes.string,
  range: PropTypes.number,
};
