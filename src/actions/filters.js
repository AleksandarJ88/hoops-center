// FILTER_PLAYERS

const filterPlayers = player => ({
  type: "FILTER_PLAYERS",
  player
});

const filterPlayersAsync = (text) => async dispatch => {
  try {
   const players = [];
    const result = await fetch(`https://www.balldontlie.io/api/v1/players?search=${text}&per_page=100`);
    const data = await result.json();
    for (const player of data.data) {
      if(player.id <= 493) {
        players.push(player);
      }
    }
    for (const player of players) {
      dispatch(filterPlayers(player));
    }
  } catch (e) {
    dispatch(() => e);
  }
};

export default filterPlayersAsync;