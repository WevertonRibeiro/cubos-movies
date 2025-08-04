export const dateFormat = (date) => {
  const newDate = new Date(date);
  return `${String(newDate.getDay()).padStart(
    2,
    "0"
  )}/${newDate.getMonth()}/${newDate.getFullYear()}`;
};
