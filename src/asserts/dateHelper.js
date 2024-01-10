export const parseDate = date => {
  date = new Date(date);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

export const parseDateForFileName = (startDate, endDate) => {
  startDate = startDate._i;
  endDate = endDate._i
  return `${startDate.day}${startDate.month + 1}${startDate.year}-${endDate.day}${endDate.month + 1}${endDate.year}`
}