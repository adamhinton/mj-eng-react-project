import StorageCtrl from "./StorageCtrl";

const mealCtrl = (function () {
  // meal Constructor
  const meal = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State
  const data = {
    meals: StorageCtrl.getMealsFromStorage(),
    currentMeal: null,
    totalCalories: 0,
  };

  // Public methods
  return {
    getMeals: function () {
      return data.meals;
    },
    addMeal: function (name, calories) {
      let ID;
      // Create ID
      if (data.meals.length > 0) {
        ID = data.meals[data.meals.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new meal
      //added a Let before this line (AD)
      let newMeal = new meal(ID, name, calories);

      // Add to meals array
      data.meals.push(newMeal);

      return newMeal;
    },
    getMealById: function (id) {
      let found = null;
      // Loop through meals
      data.meals.forEach(function (meal) {
        if (meal.id === id) {
          found = meal;
        }
      });
      return found;
    },
    updateMeal: function (name, calories, id) {
      // Calories to number
      calories = parseInt(calories);

      let found = null;

      data.meals.forEach(function (meal) {
        if (meal.id === id) {
          meal.name = name;
          meal.calories = calories;
          found = meal;
        }
      });
      return found;
    },
    deleteMeal: function (id) {
      // Get ids
      const ids = data.meals.map(function (meal) {
        return meal.id;
      });

      // Get index
      const index = ids.indexOf(id);

      // Remove meal
      data.meals.splice(index, 1);
    },
    clearAllMeals: function () {
      data.meals = [];
    },
    setCurrentMeal: function (meal) {
      data.currentmeal = meal;
    },
    getCurrentMeal: function () {
      return data.currentMeal;
    },
    getTotalCalories: function () {
      let total = 0;

      // Loop through meals and add cals
      data.meals.forEach(function (meal) {
        total += meal.calories;
      });

      // Set total cal in data structure
      data.totalCalories = total;

      // Return total
      return data.totalCalories;
    },
    logData: function () {
      return data;
    },
  };
})();

export default mealCtrl;
