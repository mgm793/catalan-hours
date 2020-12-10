import {toCatalan} from './toCatalan';

describe('toCatalan', () => {
  test('en punt', () => {
    const timeInCatalan = toCatalan({hours: 10, minutes: 0});
    expect(timeInCatalan).toEqual('les deu en punt');
  });
  test('en punt', () => {
    const timeInCatalan = toCatalan({hours: 13, minutes: 0});
    expect(timeInCatalan).toEqual('la una en punt');
  });
  test('un quart', () => {
    const timeInCatalan = toCatalan({hours: 12, minutes: 15});
    expect(timeInCatalan).toEqual('un quart d\'una');
  });
  test('dos quarts', () => {
    const timeInCatalan = toCatalan({hours: 10, minutes: 30});
    expect(timeInCatalan).toEqual('dos quarts d\'onze');
  });
  test('tres quarts', () => {
    const timeInCatalan = toCatalan({hours: 11, minutes: 45});
    expect(timeInCatalan).toEqual('tres quarts de dotze');
  });
  test('un quart i', () => {
    const timeInCatalan = toCatalan({hours: 11, minutes: 16});
    expect(timeInCatalan).toEqual('passa un minut d\'un quart de dotze');
  });
  test('dos quarts i', () => {
    const timeInCatalan = toCatalan({hours: 11, minutes: 37});
    expect(timeInCatalan).toEqual('passen set minuts de dos quarts de dotze');
  });
  test('tres quarts i', () => {
    const timeInCatalan = toCatalan({hours: 11, minutes: 50});
    expect(timeInCatalan).toEqual('passen cinc minuts de tres quarts de dotze');
  });
  test('un quart menys', () => {
    const timeInCatalan = toCatalan({hours: 11, minutes: 14});
    expect(timeInCatalan).toEqual('falta un minut per un quart de dotze');
  });
  test('dos quarts menys', () => {
    const timeInCatalan = toCatalan({hours: 12, minutes: 28});
    expect(timeInCatalan).toEqual('falten dos minuts per dos quarts d\'una');
  });
  test('tres quarts menys', () => {
    const timeInCatalan = toCatalan({hours: 12, minutes: 40});
    expect(timeInCatalan).toEqual('falten cinc minuts per tres quarts d\'una');
  });
});
