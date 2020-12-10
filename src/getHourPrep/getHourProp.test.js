import {getHourPrep} from './getHourPrep';

describe('getHourProp', () => {
  test('Getting d\'', () => {
    const prep = getHourPrep(11);
    expect(prep).toEqual('d\'');
    const prep1 = getHourPrep(1);
    expect(prep1).toEqual('d\'');
  });
  test('Getting d\'', () => {
    for (let i = 2; i <= 12; ++i) {
      if (i === 11) continue;
      const prep = getHourPrep(i);
      expect(prep).toEqual('de ');
    }
  });
});
