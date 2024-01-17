function ExperienceLevel({ score }) {
  let level = "Untrained";
  if (score > 3) level = "Beginner";
  if (score > 5) level = "Intermediate";
  if (score > 7) level = "Advanced";

  return <span>{level}</span>;
}

export default ExperienceLevel;
