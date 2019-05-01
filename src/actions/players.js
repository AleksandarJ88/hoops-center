// ADD_PLAYER
export const addPlayer = (
  {
    id = undefined,
    firstName = "",
    lastName = "",
    team = "",
  } = {}
) => ({
  type: "ADD_PLAYER",
  player: {
    id,
    firstName,
    lastName,
    team
  }
});