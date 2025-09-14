export const capitalizeFirstLetter = str => typeof str !== 'string'
  ? ''
  : str[0].toUpperCase() + str.slice(1);
