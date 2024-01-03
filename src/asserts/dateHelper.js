export const parseDate = date => {
  date = date._d;
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
