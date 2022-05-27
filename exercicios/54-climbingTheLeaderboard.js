function climbingLeaderboard(ranked, player) {
  // Write your code here
  let positions = [];
  let distScore = [...new Set(ranked)];
  let index = distScore.length - 1;
  player.forEach(element => {

      while (index >= 0) {
          if (element >= distScore[index]) {
              index--;
          } else {
              positions.push(index + 2);
              break;
          }
      }
      if (index < 0) positions.push(1);

  });

  return positions;
}

console.log(climbingLeaderboard([100,100,50,40,40,20,10], [5,25,50,120]));
