// Player Reducer

const playerReducerDefaultState = {
  id: undefined,
  firstName: "",
  lastName: "",
  team: "",
  feet: undefined,
  inches: undefined,
  pounds: undefined,
  gamesPlayed: undefined,
  totalPts: undefined,
  totalAst: undefined,
  totalReb: undefined
};

const playerReducer = (state = playerReducerDefaultState, action) => {
  switch (action.type) {
    case "SHOW_PLAYER":
      return {
        ...action.player
      };
    default:
      return state;
    }
}

export default playerReducer;