import {getHourArticle} from '../getHourArticle/getHourArticle';
import {FRACTIONS, HOURS, NUMBERS} from '../constants';
import {getHourPrep} from '../getHourPrep';
import {changeTo12hoursFormat} from '../changeTo12hoursFormat';

/**
 * @typedef ExtractedDate
 * @type {object}
 * @property {number} hours
 * @property {number} minutes
 * @property {number} seconds
 */

/**
 *
 * @param {ExtractedDate} date
 * @return {string}
 */
export function toCatalan({minutes, hours}) {
  if (!minutes) {
    const hour = changeTo12hoursFormat(hours);
    return `${getHourArticle(hour)} ${HOURS[hour]} ${FRACTIONS.PUNT}`;
  }
  const quarter = Math.floor(minutes / 15);
  const nextHour = changeTo12hoursFormat(hours + 1);
  let numberOfQuartersText = `${NUMBERS[quarter]} `;
  let quarterText = `${quarter > 1 ? FRACTIONS.QUARTS : FRACTIONS.QUART} `;
  const nextHourText = `${getHourPrep(nextHour)}${HOURS[nextHour]}`;
  if (!(minutes % 15)) {
    return numberOfQuartersText + quarterText + nextHourText;
  }
  if ((minutes % 15) <= 7) {
    const passText = `${(minutes % 15) > 1 ? 'passen' : 'passa'} ` +
      `${NUMBERS[minutes % 15]} `+
      `${(minutes % 15) > 1 ? 'minuts' : 'minut'} ` +
      `${getHourPrep(quarter)}`;
    return passText + numberOfQuartersText + quarterText + nextHourText;
  }
  const forText = `${(minutes % 15) < 14 ? 'falten' : 'falta'} ` +
      `${NUMBERS[15 - (minutes % 15)]} `+
      `${(minutes % 15) < 14 ? 'minuts' : 'minut'} ` +
      `per `;
  numberOfQuartersText = `${NUMBERS[quarter + 1]} `;
  quarterText = `${quarter + 1 > 1 ? FRACTIONS.QUARTS : FRACTIONS.QUART} `;
  return forText + numberOfQuartersText + quarterText + nextHourText;
}
