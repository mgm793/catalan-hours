import {changeTo12hoursFormat} from './changeTo12hoursFormat';

describe('changeTo12hoursFormat', () => {
  test('Correct number', () => {
    for (let i = 1; i <= 12; ++i) {
      const hour = changeTo12hoursFormat(i);
      expect(hour).toEqual(i);
    }
  });
  test('Incorrect number', () => {
    let hour = changeTo12hoursFormat(24);
    expect(hour).toEqual(12);
    hour = changeTo12hoursFormat(0);
    expect(hour).toEqual(12);
    hour = changeTo12hoursFormat(13);
    expect(hour).toEqual(1);
    hour = changeTo12hoursFormat(25);
    expect(hour).toEqual(1);
  });
});
