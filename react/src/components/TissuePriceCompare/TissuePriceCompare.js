import React, { useEffect } from "react";
import Class from "classnames";
import { useTitle } from "hookrouter";

import { Headline } from "~components/Headline";
import { TissuePriceCalculatorProvider } from "./TissuePriceCalculatorProvider";
import { Emoji } from "~components/Emoji";

import "./TissuePriceCompare.scss";

export const TissuePriceCompare = () => {
  useTitle("boSite's Tissue Counter");

  const emoji = (
    <Emoji classs="TissuePriceCompareHeadline__" emojiClass="Emoji__Tissue" label="tissue" />
  );
  const headline = <h1 className={Class("TissuePriceCompare__Headline")}>Tissue Price Compare</h1>;
  const subHeadline = (
    <h2 className={Class("TissuePriceCompare__SubHeadline")}>Vergleichen Sie die {emoji} Preise</h2>
  );

  // const initIntersectionObserver = () => {
  //   const inputWheels = document.querySelectorAll(".TissueInputWheel");
  //
  //   inputWheels.forEach((wheel) => {
  //     const config = {
  //       root: wheel,
  //       threshold: [0.99],
  //     };
  //
  //     const observer = new IntersectionObserver((entry) => {
  //       if (entry[0].intersectionRatio <= 0) return;
  //
  //       console.log("entry:", entry[0].target.textContent);
  //     }, config);
  //
  //     const wheelNumbers = wheel.querySelectorAll(".TissueInputWheel__Number");
  //
  //     wheelNumbers.forEach((numberWheel) => {
  //       observer.observe(numberWheel);
  //     });
  //   });
  // };

  useEffect(() => {
    // initIntersectionObserver();
  }, []);

  return (
    <div className={Class("TissuePriceCompare")}>
      <Headline parentClass="TissuePriceCompare" h1={headline} h2={subHeadline} />
      <div className={Class("TissuePriceCompare__CalculatorContainer")}>
        <TissuePriceCalculatorProvider />
        <TissuePriceCalculatorProvider />
      </div>
    </div>
  );
};
