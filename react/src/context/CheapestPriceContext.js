import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CheapestPriceContext = createContext(null);

export default function CheapestPriceStore({ children }) {
  const [cheapestPrice, setCheapestPrice] = useState([]);

  const cheapestPriceStore = {
    cheapestPriceContext: [cheapestPrice, setCheapestPrice],
  };

  return (
    <CheapestPriceContext.Provider value={cheapestPriceStore}>
      {children}
    </CheapestPriceContext.Provider>
  );
}

CheapestPriceStore.displayName = "CheapestPriceStore";

CheapestPriceStore.defaultProps = {
  children: PropTypes.array,
};
