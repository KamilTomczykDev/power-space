export function countScore(squat, bench, deadlift, weight) {
  const score = Number((squat + bench + deadlift) / weight).toFixed(4);
  return +score;
}
