export function countScore(squat, bench, deadlift, weight) {
  const score = Number((squat + bench + deadlift) / weight).toFixed(3);
  if (isNaN(score)) return 0;
  return +score;
}

export function countTotal(squat, bench, deadlift) {
  const total = squat + bench + deadlift;
  return total;
}
