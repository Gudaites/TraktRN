import { api, apiTMDB } from '../services/api';

export const moviesTrending = async (trending, trendingPage) => {
  try {
    const { data } = await api.get(`movies/trending?page=${trendingPage}`);
    trending.push(...data);
    await Promise.all(
      data.map(async item => {
        const info = await apiTMDB.get(
          `${item.movie.ids.tmdb}?api_key=f98a0ebf05f1ea85544a78f3bc54fde2`,
        );
        item.movie.movieInfo = {
          resume: info.data.overview,
          title: info.data.original_title,
          poster: info.data.poster_path,
          status: info.data.status,
        };
      }),
    );
    return { boolean: true, result: trending };
  } catch (error) {
    return { boolean: false };
  }
};

export const moviesPopular = async (popular, popularFilter, popularPage) => {
  try {
    const { data } = await api.get(`movies/popular?page=${popularPage}
      ${popularFilter !== null ? `&genres=${popularFilter}` : ''}`);
    popular.push(...data);
    try {
      await Promise.all(
        data.map(async item => {
          const info = await apiTMDB.get(
            `${item.ids.tmdb}?api_key=f98a0ebf05f1ea85544a78f3bc54fde2`,
          );
          item.movieInfo = {
            resume: info.data.overview,
            title: info.data.original_title,
            poster: info.data.poster_path,
            status: info.data.status,
          };
        }),
      );
    } catch (error) {
      item.movieInfo = null;
    }
    return { boolean: true, result: popular };
  } catch (error) {
    return { boolean: false };
  }
};
