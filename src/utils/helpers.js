import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function countScore(squat, bench, deadlift, weight) {
  const score = Number((squat + bench + deadlift) / weight).toFixed(3);
  if (isNaN(score)) return 0;
  return +score;
}

export function countTotal(squat, bench, deadlift) {
  const total = squat + bench + deadlift;
  return total;
}

export function convertToKilos(weight) {
  return (weight / 2.20462262).toFixed(0);
}

export function formatDate(dateParam) {
  const formatedDate = dateParam.slice(0, 10).replaceAll("-", ".");
  return formatedDate;
}

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
