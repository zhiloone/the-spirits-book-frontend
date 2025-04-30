/**
 * 
 * @param locales - A string with a BCP 47 language tag, or an array of such strings.
 * @returns A string representing the current date formatted according to the specified locales.
 */
export const getCurrentDateString = (locales?: Intl.LocalesArgument): string => {
  const currentDate = new Intl.DateTimeFormat(locales).format(new Date());
  return currentDate
}