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

    this.defaultValue = props.defaultValue;
    this.getWheelInput = props.getWheelInput;
    this.inputWheelRef = React.createRef();
    this.range = props.range;
    this.observer = null;
    this.setter = props.setter;
    this.wheel = null;
  }

  componentDidMount() {
    this.wheel = this.inputWheelRef.current.querySelectorAll(".Wheel__Number");
    this.initIntersectionObserver();
    this.focusDefaultValue();
  }

  componentWillUnmount() {
    this.clearInputWheelObserver();
  }

  focusDefaultValue = () => {
    if (typeof this.defaultValue === "undefined") return;

    this.wheel[this.defaultValue].focus();
  };

  initIntersectionObserver = () => {
    this.observer = new IntersectionObserver(this.observerIsIntersecting, {
      root: this.inputWheelRef.current,
      threshold: [0.9],
    });

    this.wheel.forEach((element) => {
      this.observer.observe(element);
    });
  };

  observerIsIntersecting = (entries) => {
    if (typeof entries === "undefined") return;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.handleActiveWheelElement(entry.target);
        this.getWheelInput(parseInt(entry.target.textContent, 10), this.setter);
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
    return (
      <div className={Class("WheelContainer")} key={uuidv4()} ref={this.inputWheelRef}>
        <ArrowButton direction="Prev" wheel={this.inputWheelRef} />
        <WheelElements defaultValue={this.defaultValue} range={this.range} />
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
