//Filter Players Reducer

const filteredPlayersReducerDefaultState = [];

export const filteredPlayersReducer = (state = filteredPlayersReducerDefaultState, action) => {
  switch (action.type) {
    case "FILTER_PLAYERS":
      return [
        ...state,
        action.player
      ];
    case "REMOVE_EVERYONE":
      return filteredPlayersReducerDefaultState;
    default:
      return state;
  };
};

// Text Filter Reducer

const textFilterReducerDefaultState = {
  text: ""
};

export const textFilterReducer = (state = textFilterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        text: action.text
      };
    default:
      return state;
  };
};
