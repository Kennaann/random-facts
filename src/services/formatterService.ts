type CapitalizeFirstLetterFn = (str: string) => string;
type FormatDateFn = (date: Date) => string;

export const capitalizeFirstLetter: CapitalizeFirstLetterFn = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const formatDate: FormatDateFn = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}-${month}:${hours}:${minutes}`;
}
