/**
 * @typedef ExtractedDate
 * @type {object}
 * @property {number} hours
 * @property {number} minutes
 * @property {number} seconds
 */

/**
 * @param {Date} date
 * @return {ExtractedDate}
 */
export function transformDate(date) {
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}
