/**
 *
 * @param {number} hour
 * @return {number}
 */
export function changeTo12hoursFormat(hour) {
  return ((hour) % 12) || 12;
}
