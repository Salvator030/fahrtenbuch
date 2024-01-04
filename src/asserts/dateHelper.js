export const parseDate = date => {
  if (date._d)
  {date = date._d;}  
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
