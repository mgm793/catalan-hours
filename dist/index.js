/**
 *
 * @param {number} hours
 * @return {string}
 */
function getHourArticle(hours) {
  if (hours > 1) return 'les';
  return 'la';
}

var FRACTIONS = {
  'QUART': 'quart',
  'QUARTS': 'quarts',
  'PUNT': 'en punt'
};

var HOURS = {
  1: 'una',
  2: 'dues',
  3: 'tres',
  4: 'quatre',
  5: 'cinc',
  6: 'sis',
  7: 'set',
  8: 'vuit',
  9: 'nou',
  10: 'deu',
  11: 'onze',
  12: 'dotze'
};

var NUMBERS = {
  1: 'un',
  2: 'dos',
  3: 'tres',
  4: 'quatre',
  5: 'cinc',
  6: 'sis',
  7: 'set'
};

/**
 *
 * @param {number} hour
 * @return {string}
 */
function getHourPrep(hour) {
  if ([1, 11].includes(hour)) return 'd\'';
  return 'de ';
}

/**
 *
 * @param {number} hour
 * @return {number}
 */
function changeTo12hoursFormat(hour) {
  return hour % 12 || 12;
}

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

function toCatalan(_ref) {
  var minutes = _ref.minutes,
      hours = _ref.hours;

  if (!minutes) {
    var hour = changeTo12hoursFormat(hours);
    return "".concat(getHourArticle(hour), " ").concat(HOURS[hour], " ").concat(FRACTIONS.PUNT);
  }

  var quarter = Math.floor(minutes / 15);
  var nextHour = changeTo12hoursFormat(hours + 1);
  var numberOfQuartersText = "".concat(NUMBERS[quarter], " ");
  var quarterText = "".concat(quarter > 1 ? FRACTIONS.QUARTS : FRACTIONS.QUART, " ");
  var nextHourText = "".concat(getHourPrep(nextHour)).concat(HOURS[nextHour]);

  if (!(minutes % 15)) {
    return numberOfQuartersText + quarterText + nextHourText;
  }

  if (minutes % 15 <= 7) {
    var passText = "".concat(minutes % 15 > 1 ? 'passen' : 'passa', " ") + "".concat(NUMBERS[minutes % 15], " ") + "".concat(minutes % 15 > 1 ? 'minuts' : 'minut', " ") + "".concat(getHourPrep(quarter));
    return passText + numberOfQuartersText + quarterText + nextHourText;
  }

  var forText = "".concat(minutes % 15 < 14 ? 'falten' : 'falta', " ") + "".concat(NUMBERS[15 - minutes % 15], " ") + "".concat(minutes % 15 < 14 ? 'minuts' : 'minut', " ") + "per ";
  numberOfQuartersText = "".concat(NUMBERS[quarter + 1], " ");
  quarterText = "".concat(quarter + 1 > 1 ? FRACTIONS.QUARTS : FRACTIONS.QUART, " ");
  return forText + numberOfQuartersText + quarterText + nextHourText;
}

export { toCatalan };
