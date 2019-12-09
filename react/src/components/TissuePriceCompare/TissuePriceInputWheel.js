import React, { useContext } from "react";
import Class from "classnames";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./TissuePriceInputWheel.scss";
import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";

export const TissuePriceInputWheel = ({ context, range }) => {
  // const numbersOnly = (element, inputValue) => {
  //   const numberRegex = /[^0-9,]/g;
  //
  //   if (numberRegex.test(inputValue)) {
  //     element.target.value = inputValue.replace(numberRegex, "");
  //     return false;
  //   }
  //   return true;
  // };

  // const validatePrice = (element) => {
  //   const inputValue = element.target.value;
  //
  //   if (inputValue.length === 0) return false;
  //
  //   const inputIsValid = numbersOnly(element, inputValue);
  //
  //   if (inputIsValid) {
  //     const digitRegex = /\D/g;
  //     const decimalCommaRegex = /\B(?=(\d{2})(?!\d))/g;
  //
  //     element.target.value = inputValue.replace(digitRegex, "").replace(decimalCommaRegex, ",");
  //
  //     return parseFloat(inputValue);
  //   }
  //   return false;
  // };

  const {
    [context]: [input, setInput],
  } = useContext(TissuePriceCalculatorContext);

  // const validateInputPrice = (clickedElement) => {
  //   setInput(validatePrice(clickedElement));
  // };

  const createWheelRangeElements = () => {
    const wheelRange = [];

    for (let i = 1; i < range + 1; i += 1) {
      wheelRange.push(
        <div className="TissueInputWheel__Number" key={uuidv4()}>
          {i}
        </div>,
      );
    }

    return wheelRange;
  };

  const getWheelInput = (element) => {
    console.log("", element.target.value);
  };

  return (
    <div className={Class("TissueInputWheel")} key={uuidv4()} onWheel={getWheelInput}>
      <div className="TissueInputWheel__Button TissueInputWheel__Button--Up" />
      <div className="TissueInputWheel__Container">{createWheelRangeElements() || ""}</div>
      <div className="TissueInputWheel__Button TissueInputWheel__Button--Down" />
    </div>
  );
};

// export class TissuePriceInputWheel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//
//   componentDidMount() {}
//
//   createWheelRangeElements = () => {
//     const { range } = this.props;
//     const wheelRange = [];
//
//     for (let i = 1; i < range + 1; i += 1) {
//       wheelRange.push(
//         <div className="TissueInputWheel__Number" key={uuidv4()}>
//           {i}
//         </div>,
//       );
//     }
//
//     return wheelRange;
//   };
//
//   // componentWillUnmount() {
//   // };
//
//   render() {
//     const wheelRange = this.createWheelRangeElements();
//
//     return (
//       <div className={Class("TissueInputWheel")} key={uuidv4()}>
//         <div className="TissueInputWheel__Container">{wheelRange || ""}</div>
//       </div>
//     );
//   }
// }

TissuePriceInputWheel.defaultProps = {
  context: "",
  range: 0,
};

TissuePriceInputWheel.propTypes = {
  context: PropTypes.string,
  range: PropTypes.number,
};
