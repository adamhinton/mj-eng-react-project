// Storage Controller
const StorageCtrl = (function () {
  // Public methods
  return {
    storeMeal: function (meal) {
      let meals;

      // Check if any meals in localStorage
      if (localStorage.getItem("meals") === null) {
        // no meals in localStorage
        meals = [];
        // Push new meal
        meals.push(meal);
        // Set localStorage
        localStorage.setItem("meals", JSON.stringify(meals));
      } else {
        // Get what is already in localStorage
        meals = JSON.parse(localStorage.getItem("meals"));
        // Push new meal
        meals.push(meal);
        // Reset localStorage
        localStorage.setItem("meals", JSON.stringify(meals));
      }
    },

    getMealsFromStorage: function () {
      let meals;

      if (localStorage.getItem("meals") === null) {
        // Nothing in localStorage
        meals = [];
      } else {
        meals = JSON.parse(localStorage.getItem("meals"));
      }

      return meals;
    },

    updateMealStorage: function (updatedMeal) {
      let meals = JSON.parse(localStorage.getItem("meals"));

      meals.forEach(function (meal, index) {
        if (updatedMeal.id === meal.id) {
          meals.splice(index, 1, updatedMeal);
        }
      });

      localStorage.setItem("meals", JSON.stringify(meals));
    },

    deleteMealFromStorage: function (id) {
      let meals = JSON.parse(localStorage.getItem("meals"));

      meals.forEach(function (meal, index) {
        if (id === meal.id) {
          meals.splice(index, 1);
        }
      });

      localStorage.setItem("meals", JSON.stringify(meals));
    },

    clearMealsFromStorage: function () {
      localStorage.removeItem("meals");
    },
  };
})();

export default StorageCtrl;
