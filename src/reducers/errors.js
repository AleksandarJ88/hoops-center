//Errors Reducer

const errorsReducerDefaultState = {
  tooManyPlayers: "",
  playerAlreadyExists: "",
  noSearchResults: ""
}

const errorsReducer = (state = errorsReducerDefaultState, action) => {
  switch (action.type) {
    case "TOO_MANY_PLAYERS":
      return {
        ...state,
        tooManyPlayers: action.error
      };
    case "PLAYER_ALREADY_EXISTS":
      return {
        ...state,
        playerAlreadyExists: action.error
      };
    case "NO_SEARCH_RESULTS":
      return {
        ...state,
        noSearchResults: action.error
      };
    case "RESET_STATE":
      return errorsReducerDefaultState;
    default:
      return state;
  }
}

export default errorsReducer;