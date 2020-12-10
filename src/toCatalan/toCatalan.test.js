import {toCatalan} from './toCatalan';

describe('toCatalan', () => {
  test('en punt', () => {
    const timeInCatalan = toCatalan(new Date('December 17, 1995 10:00:00'));
    expect(timeInCatalan).toEqual('les deu en punt');
  });
  test('en punt', () => {
    const timeInCatalan = toCatalan(new Date('December 17, 1995 13:00:00'));
    expect(timeInCatalan).toEqual('la una en punt');
  });
  test('un quart', () => {
    const timeInCatalan = toCatalan(new Date('December 17, 1995 12:15:00'));
    expect(timeInCatalan).toEqual('un quart d\'una');
  });
  test('dos quarts', () => {
    const timeInCatalan = toCatalan(new Date('December 17, 1995 10:30:00'));
    expect(timeInCatalan).toEqual('dos quarts d\'onze');
  });
  test('tres quarts', () => {
    const timeInCatalan = toCatalan(new Date('December 17, 1995 11:45:00'));
    expect(timeInCatalan).toEqual('tres quarts de dotze');
  });
  test('un quart i', () => {
    const timeInCatalan = toCatalan(new Date('December 17, 1995 11:16:00'));
    expect(timeInCatalan).toEqual('passa un minut d\'un quart de dotze');
  });
  test('dos quarts i', () => {
    const timeInCatalan = toCatalan(new Date('December 17, 1995 11:37:00'));
    expect(timeInCatalan).toEqual('passen set minuts de dos quarts de dotze');
  });
  test('tres quarts i', () => {
    const timeInCatalan = toCatalan(new Date('December 17, 1995 11:50:00'));
    expect(timeInCatalan).toEqual('passen cinc minuts de tres quarts de dotze');
  });
  test('un quart menys', () => {
    const timeInCatalan = toCatalan(new Date('December 17, 1995 11:14:00'));
    expect(timeInCatalan).toEqual('falta un minut per un quart de dotze');
  });
  test('dos quarts menys', () => {
    const timeInCatalan = toCatalan(new Date('December 17, 1995 12:28:00'));
    expect(timeInCatalan).toEqual('falten dos minuts per dos quarts d\'una');
  });
  test('tres quarts menys', () => {
    const timeInCatalan = toCatalan(new Date('December 17, 1995 12:40:00'));
    expect(timeInCatalan).toEqual('falten cinc minuts per tres quarts d\'una');
  });
});
