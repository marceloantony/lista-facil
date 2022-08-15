export const sortArrayOfJson = (a: any, b: any, prop: string) => {
  if (a[prop] > b[prop]) {
    return 1;
  }
  if (a[prop] < b[prop]) {
    return -1;
  }
  return 0;
};

export const sortListsByTitle = (a: any, b: any) =>
  sortArrayOfJson(a, b, "title");
export const sortListsByDate = (a: any, b: any) =>
  sortArrayOfJson(a, b, "date");
export const sortListsByValue = (a: any, b: any) =>
  sortArrayOfJson(a, b, "value");

export const formatStringQuantity = (num: number) => {
  let numberWithZeroes = String(num);
  let counter = numberWithZeroes.length;
  while (counter < 3) {
    numberWithZeroes = "0" + numberWithZeroes;
    counter++;
  }
  return numberWithZeroes;
};
