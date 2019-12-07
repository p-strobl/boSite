import React, { Component } from "react";
import Class from "classnames";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./TissuePriceInputWheel.scss";

export class TissuePriceInputWheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wheelRange: [],
    };
  }

  componentDidMount() {
    const { range } = this.props;

    const wheelRange = [];

    for (let i = 1; i < range + 1; i++) {
      wheelRange.push(
        <div className="TissueInputWheel__Number" key={uuidv4()}>
          {i}
        </div>,
      );
    }

    this.setState(() => {
      return {
        wheelRange,
      };
    });
  }

  // componentWillUnmount() {
  // };

  render() {
    const { wheelRange } = this.state;

    // const wheelRange = [];

    // for (let i = 1; i < range; i++) {
    //   wheelRange.push(
    //     <div className="TissueInputWheel__Number" key={uuidv4()}>
    //       {i}
    //     </div>,
    //   );
    // }

    return (
      <div className={Class("TissueInputWheel")} key={uuidv4()}>
        <div className="TissueInputWheel__Container">{wheelRange || ""}</div>
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
