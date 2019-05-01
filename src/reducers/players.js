// Players Reducer

const playersReducerDefaultState = [];

const playersReducer = (state = playersReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return [
        ...state,
        action.player
      ];
    default:
      return state;
    }
}