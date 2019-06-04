//Errors Reducer

const errorsReducerDefaultState = {
  tooManyPlayers: "",
  playerAlreadyExists: "",
  failedToFetch: ""
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
    case "FAILED_TO_FETCH":
      return {
        ...state,
        failedToFetch: action.error
      };
    case "RESET_STATE":
      return errorsReducerDefaultState;
    default:
      return state;
  }
}

export default errorsReducer;