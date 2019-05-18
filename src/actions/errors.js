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

// NO_SEARCH_RESULTS

export const noSearchResults = () => ({
  type: "NO_SEARCH_RESULTS",
  error: "No player found for your search. Please try again."
})

// RESET_STATE

export const resetState = () => ({
  type: "RESET_STATE"
})