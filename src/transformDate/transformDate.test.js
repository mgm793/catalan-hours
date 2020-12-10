import {transformDate} from './transformDate';

describe('transformDate', () => {
  test('transform to correct object', () => {
    const date = new Date('December 1, 2020 03:24:10');
    const transformetDate = transformDate(date);
    expect(transformetDate).toEqual({
      hours: 3,
      minutes: 24,
    });
  });
});
