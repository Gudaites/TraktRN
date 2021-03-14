/* eslint-disable no-undef */
import { moviesPopular, moviesTrending } from '../utils/Movies';

describe('utils', () => {
  test('Teste load Popular success', async () => {
    const { boolean } = await moviesPopular([], null, 1);
    expect(boolean).toBeTruthy();
  });

  test('Teste load Popular error', async () => {
    const { boolean } = await moviesPopular();
    expect(boolean).toBeFalsy();
  });

  test('Teste load Popular Filter', async () => {
    const { boolean } = await moviesPopular([], 'action', 1);
    expect(boolean).toBeTruthy();
  });

  test('Teste load Trending success', async () => {
    const { boolean } = await moviesTrending([], 1);
    expect(boolean).toBeTruthy();
  });

  test('Teste load Trending error', async () => {
    const { boolean } = await moviesTrending();
    expect(boolean).toBeFalsy();
  });
});
