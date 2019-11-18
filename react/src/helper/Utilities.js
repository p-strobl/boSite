export const capitalizeFirstLetter = (string) => {
  if (string.length === 0) {
    return false;
  }

  return string.replace(string[0], string[0].toUpperCase());
};

export const splitOnCamelCase = (string) => {
  if (string.length === 0) {
    return false;
  }

  return string.replace(/(?=[A-Z])/g, " ");
};

export const determineIfTouchDevice = () => {
  return !(
    "ontouchstart" in window ||
    navigator.MaxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};
