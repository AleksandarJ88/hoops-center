// ADD_TO_COMPARE

export const addToCompare = (
  {
    id = undefined,
    firstName = "",
    lastName = "",
    team = "",
    gamesPlayed = undefined,
    avgPts = undefined,
    avgAst = undefined,
    avgReb = undefined
  } = {}
) => ({
  type: "ADD_TO_COMPARE",
  player: {
    id,
    firstName,
    lastName,
    team,
    gamesPlayed,
    avgPts,
    avgAst,
    avgReb
  }
});

// REMOVE_FROM_COMPARE

export const removeFromCompare = (id) => ({
  type: "REMOVE_FROM_COMPARE",
  id
})

// ASYNCHRONOUS ACTION

export const addToCompareAsync = (playerID) => async dispatch => {
  try {
    let totalGames = 0;
    let totalPoints = 0;
    let totalAssists = 0;
    let totalRebounds = 0;
    const result = await fetch(`https://www.balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=${playerID}&per_page=100`);
    const data = await result.json();
    for(const game of data.data) {
      if(game.min) {
        totalGames = totalGames + 1;
      }
    }
    for(let i = 0; i < data.data.length; i++) {
      totalPoints = totalPoints + data.data[i].pts;
      totalAssists = totalAssists + data.data[i].ast;
      totalRebounds = totalRebounds + data.data[i].reb;
    }
    dispatch(addToCompare({
      id: data.data[0].player.id,
      firstName: data.data[0].player.first_name,
      lastName: data.data[0].player.last_name,
      team: data.data[0].team.full_name,
      gamesPlayed: totalGames,
      avgPts: Number.parseFloat((totalPoints / totalGames).toFixed(1)),
      avgAst: Number.parseFloat((totalAssists / totalGames).toFixed(1)),
      avgReb: Number.parseFloat((totalRebounds / totalGames).toFixed(1))
    }));
  } catch (e) {
    dispatch(() => e);
  }
};