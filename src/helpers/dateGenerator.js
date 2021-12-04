export const getDate = (date) => date.toLocaleDateString('en-US');
export const getCurrentDate = () => getDate(new Date());
