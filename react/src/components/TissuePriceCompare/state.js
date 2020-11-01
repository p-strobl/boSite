import { atom, atomFamily } from "recoil";

export const wheel = {
  roll: atom({
    key: "WheelRoll",
    default: {
      value: 10,
      range: 20,
    },
  }),
  sheets: atom({
    key: "WheelSheets",
    default: {
      value: 120,
      range: 200,
    },
  }),
  layer: atom({
    key: "WheelLayer",
    default: {
      value: 3,
      range: 5,
    },
  }),
  price: atom({
    key: "WheelPrice",
    default: {
      value: 0,
    },
  }),
};

export const calculator = atomFamily({
  key: "Calculator",
  default: {
    roll: 10,
    sheets: 120,
    layer: 3,
  },
});

export const price = atomFamily({
  key: "Price",
  default: 0,
});
