export const capitalizeFirstLetter = (string) => {
  return string.replace(string[0], string[0].toUpperCase());
};

export const splitCamelCase = (string) => {
  return string.replace(/(?=[A-Z])/g, " ");
};
