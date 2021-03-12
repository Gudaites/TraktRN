const initialState = {
  trending: [],
  trendingPage: 1,
  trendingFilter: null,
  popular: [],
  popularPage: 1,
  filters: [],
  anticipated: [],
  isLoading: false,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRENDING':
      return {
        ...state,
        trending: action.payload,
        trendingPage: action.page,
        trendingFilter: action.filter,
      };
    case 'SET_POPULAR':
      return { ...state, popular: action.payload, popularPage: action.page };
    case 'SET_FILTER':
      return { ...state, filters: action.payload };
    case 'SET_ANTICIPATED':
      return { ...state, anticipated: action.payload };
    case 'IS_LOADING':
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export default movies;
