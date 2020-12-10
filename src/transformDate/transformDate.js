/**
 * @typedef ExtractedDate
 * @type {object}
 * @property {number} hours
 * @property {number} minutes
 */

/**
 * @param {Date} date
 * @return {ExtractedDate}
 */
export function transformDate(date) {
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
  };
}
