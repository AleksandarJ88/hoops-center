// ADD_TO_COMPARE

const addToCompare = (
  {
    id = undefined,
    firstName = "",
    lastName = "",
    team = "",
  } = {}
) => ({
  type: "ADD_TO_COMPARE",
  player: {
    id,
    firstName,
    lastName,
    team
  }
});

// REMOVE_FROM_COMPARE

export const removeFromCompare = ({id} = {}) => ({
  type: "REMOVE_FROM_COMPARE",
  id
})

// ASYNCHRONOUS ACTION

export const addToCompareAsync = (playerID) => async dispatch => {
  try {    
    const result = await fetch(`https://www.balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=${playerID}&per_page=100`);
    const data = await result.json();
    dispatch(addToCompare({
      id: data.data[0].player.id,
      firstName: data.data[0].player.first_name,
      lastName: data.data[0].player.last_name,
      team: data.data[0].team.full_name}));
  } catch (e) {
    dispatch(() => e);
  }
};