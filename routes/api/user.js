const express = require("express");

const { ctrlWrapper, validation, auth } = require("../../middlewares");
const { joiUserInfoSchema } = require("../../models/user");

const { userCtrl } = require("../../controllers");

const router = express.Router();

router.get(
  "/getNutritionAdvice",
  validation(joiUserInfoSchema),
  ctrlWrapper(userCtrl.getNotLoggedUserDietAdvice)
);

router.post(
  "/loggedUserNutritionAdvice",
  validation(joiUserInfoSchema),
  ctrlWrapper(auth),
  ctrlWrapper(userCtrl.getLoggedUserDietAdvice)
);

// -юзер висилає дані: дата і масив їжі
// - якщо обєкту з з даною датою немає, но створюємо новий обєкт в масиві userDiet
// - якщо дату знайдено, додаєм в обєкт в масив продиктс ід продукту з бази даних

// видалення:
// - юзер висилає дані: дата і масив їжі
// - якщо дати немає, видаем помилку
// -якщо дата є: перебираєм масив продуктів і видаляєм те що прислав юзер

// const express = require("express");
// const router = express.Router();

// router.patch("/daily-diet", userControllers.updateDailyDiet);

// router.delete("/daily-diet", userControllers.deleteDailyDiet);

// module.exports = router;

module.exports = router;
