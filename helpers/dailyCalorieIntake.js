const dailyCalorieIntake = (
  height,
  age,
  currentWeight,
  desiredWeight,
  bloodType
) => {
  const calories = Math.round(
    10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - desiredWeight)
  );
  return calories;
};

module.exports = dailyCalorieIntake;
