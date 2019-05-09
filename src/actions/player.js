// SHOW_PLAYER

const showPlayer = (
  {
    id = undefined,
    firstName = "",
    lastName = "",
    team = "",
  } = {}
) => ({
  type: "SHOW_PLAYER",
  player: {
    id,
    firstName,
    lastName,
    team
  }
});

// ASYNCHRONOUS ACTION

const showPlayerAsync = (playerID) => async dispatch => {
  try {    
    const result = await fetch(`https://www.balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=${playerID}&per_page=100`);
    const data = await result.json();
    dispatch(showPlayer({
      id: data.data[0].player.id,
      firstName: data.data[0].player.first_name,
      lastName: data.data[0].player.last_name,
      team: data.data[0].team.full_name}));
  } catch (e) {
    dispatch(() => e);
  }
};

export default showPlayerAsync;