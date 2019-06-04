// TOO_MANY_PLAYERS

export const tooManyPlayers = () => ({
  type: "TOO_MANY_PLAYERS",
  error: "Two players already on compare screen. Please remove at least one, then try again."
})

// PLAYER_ALREADY_EXISTS

export const playerAlreadyExists = () => ({
  type: "PLAYER_ALREADY_EXISTS",
  error: "That player has already been added to the compare screen. Please select different player and try again."
})

// FAILED_TO_FETCH

export const failedToFetch = () => ({
  type: "FAILED_TO_FETCH",
  error: "Failed to fetch data. Check your internet connection and try again."
})

// RESET_STATE
// sets error reducer to an empty object in order to remove error messages from UI

export const resetState = () => ({
  type: "RESET_STATE"
})