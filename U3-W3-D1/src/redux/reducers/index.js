const initialState = {
  favorites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ENTERPRISE":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [...state.favorites.content, action.payload],
        },
      };

    case "REMOVE_ENTERPRISE":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: state.favorites.content.filter(
            (enterprise, i) => i !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
