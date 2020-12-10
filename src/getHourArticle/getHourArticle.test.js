import {getHourArticle} from './getHourArticle';

describe('getHourArticle', () => {
  test('Singular Hour', () => {
    const article = getHourArticle(1);
    expect(article).toEqual('la');
  });
  test('Plural Hour', () => {
    const article = getHourArticle(2);
    expect(article).toEqual('les');
  });
});
