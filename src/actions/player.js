// SHOW_PLAYER

const showPlayer = (
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
  type: "SHOW_PLAYER",
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

// ASYNCHRONOUS ACTION

export const showPlayerAsync = (playerID) => async dispatch => {
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
    dispatch(showPlayer({
      id: data.data[0].player.id,
      firstName: data.data[0].player.first_name,
      lastName: data.data[0].player.last_name,
      team: data.data[0].team.full_name,
      gamesPlayed: totalGames,
      avgPts: totalPoints / totalGames,
      avgAst: totalAssists / totalGames,
      avgReb: totalRebounds / totalGames
    }));
  } catch (e) {
    dispatch(() => e);
  }
};