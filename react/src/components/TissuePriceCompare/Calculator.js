import React, { useContext, useState, useEffect, useRef } from "react";
import Class from "classnames";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { PriceInput } from "~components/TissuePriceCompare/PriceInput";
import { PriceOutput } from "~components/TissuePriceCompare/PriceOutput";
import { WheelInput } from "~components/TissuePriceCompare/WheelInput";

import "./Calculator.scss";

export const Calculator = ({
  singleCalculatorState,
  singleCalculatorIndex,
  setGlobalCalculatorState,
}) => {
  const [calculatorState, setCalculatorState] = useState(singleCalculatorState);

  const calculatePrice = () => {
    if (rollCount === 0 || sheetCount === 0 || layerCount === 0 || price === 0) return 0;

    const totalLayerCount = rollCount * sheetCount * layerCount;
    const singleLayerPrice = price / totalLayerCount;

    return singleLayerPrice.toFixed(6) / 100;
  };

  const toLocalPrice = (value) => {
    if (value === 0) return;

    setLocalPrice(
      value.toLocaleString("de-DE", {
        minimumFractionDigits: 6,
      }),
    );
  };

  // const handleInput = (input) => {
  //   if (input === 0) return;
  //   console.log("toLocalPrice(calculatePrice())", toLocalPrice(calculatePrice()));
  //   // setTotalPrice(toLocalPrice(calculatePrice()));
  // };
  //
  // function clearInputWheelClass(entryWheel) {
  //   const elementWheel = entryWheel.querySelectorAll(".Wheel__Number");
  //   elementWheel.forEach((element) => {
  //     element.classList.remove("Wheel__Number--Active");
  //   });
  // }
  //
  // function handleActiveWheelElement(entry) {
  //   const entryParent = entry.parentNode;
  //
  //   clearInputWheelClass(entryParent);
  //   entry.classList.add("Wheel__Number--Active");
  // }
  //
  // function observerIsIntersecting(entries) {
  //   if (typeof entries === "undefined") return;
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       const entryContext = entry.target.closest(".WheelContainer").dataset.context;
  //
  //       handleActiveWheelElement(entry.target);
  //       console.log("entry.target", entry.target.closest(".WheelContainer").dataset.context);
  //       // this.getWheelInput(parseInt(entry.target.textContent, 10), this.setter);
  //     }
  //   });
  // }
  //
  // function initIntersectionObserver() {
  //   observer = new IntersectionObserver(observerIsIntersecting, {
  //     root: inputWheelRef.current,
  //     threshold: [0.9],
  //   });
  //
  //   wheel.forEach((element) => {
  //     observer.observe(element);
  //   });
  // }
  //
  // function clearInputWheelObserver() {
  //   wheel.forEach((element) => {
  //     observer.unobserve(element);
  //   });
  // }

  useEffect(() => {}, []);

  return (
    <div className={Class("Calculator")}>
      {/*<div className={Class("Calculator__Item Calculator__Input")}>*/}
      {/*  <WheelInput context="setRollCount" defaultValue={defaultValues.rollCount} range={20} />*/}
      {/*  <WheelInput*/}
      {/*    context="sheetCountContext"*/}
      {/*    defaultValue={defaultValues.sheetCount}*/}
      {/*    range={200}*/}
      {/*  />*/}
      {/*  <WheelInput context="layerCountContext" defaultValue={defaultValues.layerCount} range={5} />*/}
      {/*  <PriceInput*/}
      {/*    context="priceContext"*/}
      {/*    dataDefaultValue={defaultValues.price}*/}
      {/*    defaultValue={price}*/}
      {/*    placeholder="Kaufpreis"*/}
      {/*    text="Kaufpreis"*/}
      {/*    getNumberInput={handleInput}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className={Class("Calculator__Item Calculator__Output")}>*/}
      {/*  <PriceOutput localPrice={totalPrice} value={price} />*/}
      {/*</div>*/}
    </div>
  );
};
