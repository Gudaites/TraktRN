const initialState = {
  trending: [],
  trendingPage: 1,
  watched: [],
  watchedPage: 1,
  boxOffice: [],
  anticipated: [],
  isLoading: false,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRENDING':
      return {...state, trending: action.payload, trendingPage: action.page};
    case 'SET_WATCHED':
      return {...state, watched: action.payload};
    case 'SET_BOXOFFICE':
      return {...state, boxOffice: action.payload};
    case 'SET_ANTICIPATED':
      return {...state, anticipated: action.payload};
    case 'IS_LOADING':
      return {...state, isLoading: action.payload};

    default:
      return state;
  }
};

export default movies;
