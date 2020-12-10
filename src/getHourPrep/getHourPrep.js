/**
 *
 * @param {number} hour
 * @return {string}
 */
export function getHourPrep(hour) {
  if ([1, 11].includes(hour)) return 'd\'';
  return 'de ';
}
