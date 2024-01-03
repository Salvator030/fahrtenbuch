export const parseDate = date => {
  if (date._d) {
    return `${date._d.getDate()}.${date._d.getMonth()}.${date._d.getFullYear()}`;
  }
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
