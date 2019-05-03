// ADD_PLAYER
const addPlayer = (
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

const addPlayerAsync = (playerID) => async dispatch => {
  try {    
    const result = await fetch(`https://www.balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=${playerID}&per_page=100`);
    const data = await result.json();
    dispatch(addPlayer({
      id: data.data[0].player.id,
      firstName: data.data[0].player.first_name,
      lastName: data.data[0].player.last_name,
      team: data.data[0].team.full_name}));
    console.log(data.data[0].player.first_name);
  } catch (e) {
    dispatch(() => e);
  }
};

export default addPlayerAsync;