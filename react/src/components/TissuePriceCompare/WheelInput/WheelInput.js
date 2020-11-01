import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Class from "classnames";
import uuidv4 from "uuid/v4";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";

import { wheel } from "../state";

import "./WheelInput.scss";
import { ArrowButton } from "./ArrowButton";
import { Wheel } from "./Wheel";

export const WheelInput = ({ calculatorIndex, type }) => {
  // const ref = useRef(null);
  // const [wheelState, setWheelState] = useRecoilState(wheel[type](calculatorIndex));
  // console.log("inView", inView);
  // console.log("entry", entry);
  // console.log("inputWheelRef", inputWheelRef);
  // let wheelElements = null;
  // const observer = null;

  // function focusInitialValue() {
  //   if (typeof wheelState === "undefined") {
  //     return;
  //   }

  //   const wheelElements = inputWheelRef.current.querySelectorAll(".Wheel__Number");

  //   // console.log("wheelElements", wheelElements);
  //   // console.log("wheelState.value", wheelState.value);
  //   wheelElements[wheelState.value].focus();
  // }

  // function removeActiveClassFromAllWheels(entry) {
  //   if (typeof entry === "undefined") {
  //     return;
  //   }

  //   const currentWheelElements = entry.parentNode.querySelectorAll(".Wheel__Number");

  //   currentWheelElements.forEach((element) => {
  //     element.classList.remove("Wheel__Number--Active");
  //   });
  // }

  // function addActiveClassToWheel(entry) {
  //   if (typeof entry === "undefined") {
  //     return;
  //   }

  //   entry.classList.add("Wheel__Number--Active");
  // }

  // function handleWheelIntersection(entry) {
  //   if (typeof entry === "undefined") {
  //     return;
  //   }

  //   removeActiveClassFromAllWheels(entry);
  //   setWheelState(parseInt(entry.textContent, 10));
  //   addActiveClassToWheel(entry);
  // }

  // function observerIsIntersecting(entries) {
  //   if (typeof entries === "undefined") {
  //     return;
  //   }

  //   entries.forEach((entry) => {
  //     if (!entry.isIntersecting) {
  //       return;
  //     }

  //     handleWheelIntersection(entry.target);
  //   });
  // }

  // function initIntersectionObserver() {
  //   const wheelElements = inputWheelRef.current.querySelectorAll(".Wheel__Number");

  //   observer = new IntersectionObserver(observerIsIntersecting, {
  //     root: inputWheelRef.current,
  //     threshold: [0.9],
  //   });

  //   wheelElements.forEach((element) => {
  //     if (typeof element === "undefined") {
  //       return;
  //     }

  //     observer.observe(element);
  //   });
  // }

  // function clearInputWheelObserver() {
  //   const wheelElements = inputWheelRef.current.querySelectorAll(".Wheel__Number");

  //   wheelElements.forEach((element) => {
  //     if (typeof element === "undefined") {
  //       return;
  //     }

  //     observer.unobserve(element);
  //   });
  // }

  // useEffect(() => {
  //   wheelElements = inputWheelRef.current.querySelectorAll(".Wheel__Number");

  //   initIntersectionObserver();
  //   focusInitialValue();

  //   return () => {
  //     clearInputWheelObserver();
  //   };
  // }, []);

  return (
    <div className={Class("WheelContainer")} key={uuidv4()}>
      <ArrowButton direction="Prev" />
      <Wheel calculatorIndex={calculatorIndex} type={type} />
      <ArrowButton direction="Next" />
    </div>
  );
};

WheelInput.defaultProps = {
  calculatorIndex: 0,
  type: "",
};

WheelInput.propTypes = {
  calculatorIndex: PropTypes.number,
  type: PropTypes.string,
};
