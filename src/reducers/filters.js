//Filters Reducer

const filtersReducerDefaultState = [];

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "FILTER_PLAYERS":
      return [
        ...state,
        action.player
      ];
    default:
      return state;
  }
}

export default filtersReducer;