/* eslint-disable consistent-return */
function setTrending(movies, page) {
  const action = {
    type: 'SET_TRENDING',
    payload: new Promise(movies),
    page: new Promise(page),
  };
  return action;
}

function setPopular(movies, page) {
  const action = {
    type: 'SET_POPULAR',
    payload: new Promise(movies),
    page: new Promise(page),
  };
  return action;
}

function setPopularFilter(movies, page) {
  const action = {
    type: 'SET_POPULAR_FILTER',
    payload: new Promise(movies),
    page: new Promise(page),
  };
  return action;
}

function setFilter(movies) {
  const action = {
    type: 'SET_FILTER',
    payload: new Promise(movies),
  };
  return action;
}

function setIsLoading(movies) {
  const action = {
    type: 'IS_LOADING',
    payload: new Promise(movies),
  };
  return action;
}

function setMovies(movies, type) {
  switch (type) {
    case 'trending':
      return setTrending(movies);
    case 'filter':
      return setFilter(movies);
    case 'popular':
      return setPopular(movies);
    case 'popularFilter':
      return setPopularFilter(movies);
    default:
      break;
  }
}

export { setMovies, setIsLoading };
