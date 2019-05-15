// FILTER_PLAYERS

const filterPlayers = player => ({
  type: "FILTER_PLAYERS",
  player
});

// REMOVE_EVERYONE

export const removeEveryone = () => ({
  type: "REMOVE_EVERYONE"
})

// SET_TEXT_FILTER

export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
})

export const filterPlayersAsync = (text) => async dispatch => {
  try {
   const players = [];
    const result = await fetch(`https://www.balldontlie.io/api/v1/players?search=${text}&per_page=100`);
    const data = await result.json();
    for (const player of data.data) {
      if(player.id <= 493 && text.length >=3) {
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