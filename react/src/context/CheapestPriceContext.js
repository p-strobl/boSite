import { createContext, useState } from "react";

export const CheapestPrice = () => {};

const [cheapestPrice, setCheapestPrice] = useState([]);

export default createContext({
  cheapestPrice: [cheapestPrice, setCheapestPrice],
});

const UserContext = createContext({});
