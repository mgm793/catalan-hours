/**
 *
 * @param {number} hours
 * @return {string}
 */
export function getHourArticle(hours) {
  if (hours > 1) return 'les';
  return 'la';
}
