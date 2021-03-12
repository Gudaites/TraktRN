function setTrending(movies, page) {
  const action = {
    type: 'SET_TRENDING',
    payload: new Promise(movies),
    page: new Promise(page),
  };
  return action;
}

function setWatched(movies, page) {
  const action = {
    type: 'SET_POPULAR',
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

function setAnticipated(movies) {
  const action = {
    type: 'SET_ANTICIPATED',
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
    case 'popular':
      return setWatched(movies);
    case 'boxoffice':
      return setBoxOffice(movies);
    case 'anticipated':
      return setAnticipated(movies);
    default:
      break;
  }
}

export { setMovies, setIsLoading };
