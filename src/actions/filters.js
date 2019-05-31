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

/* Asynchronous action
Uses api's search function to filter players based on a string provided.
Code checks if a filtered player is from a current season and then pushes it to an array.
Synchronous action generator is then used by the reducer to update the state.
*/

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