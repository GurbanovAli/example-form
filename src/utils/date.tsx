import { LanguageCode } from 'constants/languageCodes';
import { dateSplitterRegex } from 'constants/regEx';

/**
 * Builds Date object from day, month, and month.
 * @param day string representation of a day of the month.
 * @param month string representation of a month.
 * @param year string representation of a year.
 * @returns a Date object corresponding to the input date string.
 */
export const buildDate = (day: string, month: string, year: string): Date =>
  new Date(+year, +month - 1, +day);

/**
 * Splits the given formatted date string into parts. Parts are split by '.', '-' or '/' symbols.
 * @param date formatted date string.
 */
export const splitIntoDateParts = (date: string): string[] =>
  date.split(dateSplitterRegex);

/**
 * Converts dd.mm.yyyy, dd/mm/yyyy or dd-mm-yyyy formatted date string into Date object.
 * @param date formatted date string.
 * @returns a Date object corresponding to the input date string.
 */
export const convertToDate = (date: string): Date => {
  const [day, month, year] = splitIntoDateParts(date);

  return buildDate(day, month, year);
};

/**
 * Returns a string representing the month and day of the input date in the specified language.
 * @param date the Date object to be processed.
 * @param language the language code for the desired language of the output string.
 * @returns a string representing the month and day of the input date in the specified language.
 */
export const getMonthDayString = (date: Date, language: LanguageCode): string =>
  Intl.DateTimeFormat(language, {
    month: 'long',
    day: 'numeric',
  }).format(date);

/**
 * Returns a string representing the weekday of the input date in the specified language.
 * @param date the Date object to be processed.
 * @param language the language code for the desired language of the output string.
 * @returns a string representing the weekday of the input date in the specified language.
 */
export const getWeekdayString = (date: Date, language: LanguageCode): string =>
  Intl.DateTimeFormat(language, {
    weekday: 'short',
  }).format(date);
