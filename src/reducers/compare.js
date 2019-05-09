//Compare Players Reducer

const compareReducerDefaultState = [];

const compareReducer = (state = compareReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_TO_COMPARE":
      return [
        ...state,
        action.player
      ];
    case "REMOVE_FROM_COMPARE":
      return state.filter(player => player.id !== action.id);
    default:
      return state;
  }
}

export default compareReducer;