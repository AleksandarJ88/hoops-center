//Compare Players Reducer

const compareReducerDefaultState = [];

const compareReducer = (state = compareReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_TO_COMPARE":
      return [
        ...state,
        action.player
      ];
    default:
      return state;
  }
}

export default compareReducer;