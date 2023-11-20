function strikeRateOfaBatsmanForEachSeason(
  matchesData,
  deliveriesData,
  player = ''
) {
  var strick = {};
  deliveriesData.reduce((info, ball) => {
    if (matchesData != []) {
      var year =
        matchesData[ball.match_id - matchesData[0].id].season; //this single line can find  season of the match without using any map or filter .
      //first finding the index of that delivery in match then finding it season

      if (!info[ball.batsman]) {
        //checks for the batsman in the object. if not present create one
        info[ball.batsman] = { [year]: { run: 0, ball: 0 } };
        strick[ball.batsman] = { [year]: 0 }; //parallel creating the strike rate
      }

      if (!info[ball.batsman][year]) {
        info[ball.batsman][year] = { run: 0, ball: 0 }; //check for a perticular player an year is present
        strick[ball.batsman][year] = 0;
      }

      info[ball.batsman][year].run += Number.parseInt(
        ball.batsman_runs
      );

      if (ball.wide_runs == 0) {
        info[ball.batsman][year].ball += 1;
      }
      strick[ball.batsman][year] = Math.ceil(
        (info[ball.batsman][year].run /
          info[ball.batsman][year].ball) *
          100
      );
    }
    return info;
  }, {});

  if (player != '') {
    return { [player]: strick[player] }; // if player is defined then gives data of him
  }
  return strick; // if player is not defined then
}

module.exports = strikeRateOfaBatsmanForEachSeason;
