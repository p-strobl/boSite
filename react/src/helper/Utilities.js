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
