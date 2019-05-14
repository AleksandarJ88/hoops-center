// FILTER_PLAYERS

const filterPlayers = player => ({
  type: "FILTER_PLAYERS",
  player
});

// SET_TEXT_FILTER

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
})

const filterPlayersAsync = (text) => async dispatch => {
  try {
   const players = [];
    const result = await fetch(`https://www.balldontlie.io/api/v1/players?search=${text}&per_page=100`);
    const data = await result.json();
    for (const player of data.data) {
      if(player.id <= 493 && text.length >=3) {
        for(const ids of players) {
          if(!ids.id.includes(player.id)) {
            players.push(player);
          }
        }
      }
    }
    for (const player of players) {
      dispatch(filterPlayers(player));
    }
    dispatch(setTextFilter(text));
  } catch (e) {
    dispatch(() => e);
  }
};

export default filterPlayersAsync;