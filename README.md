# `APPLICATION OVERVIEW:`

-This application displays meals (name and calorie count) in digestible chunks
-Has full CRUD functionality, allowing user to update, delete, read and add meals
-Displays total calories of all meals

# `TECHNOLOGIES USED:`

GLOBAL STATE MANAGEMENT:
Context API: https://reactjs.org/docs/context.html

COMPONENT DESIGN:
Some components come from Material UI: https://mui.com/

PERSISTENT DATA STORAGE:
All user-inputted meals info is stored in localStorage

UNIT TESTING:
Used Jest unit testing library:
https://jestjs.io/docs/getting-started

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# APP DOCUMENTATION:

## `COMPONENT STRUCTURE`

App.js
  MealsProvider.js : global state management
    Header.js
    AddMealForm.js : add meal to list
    TotalCalories.js
    MealDisplayContainer.js
      SingleMeal.js:  (as many meals as needed)
    MealDisplayContainer
  MealsProvider/> 
App.js

## `FILE BREAKDOWN`

### `ItemCtrl.js`

-Works in tandem with StorageCtrl.js
-Has various functions for seeing, creating, updating and deleting meal items
-These are imported in to various files in the app

### `StorageCtrl.js`

-Works in tandem with ItemCtrl.js
-Has various functions for storing, getting, updating and deleting individual meals, or all meals, from localStorage

### `App.js: <App/>`

-Standard React App component. Houses all the other components

### `MyContext.js: <MealsProvider/>`

-Provides global state management via Context API (https://reactjs.org/docs/context.html)
-Specifically, holds the persisted list of meals to display
-Has variables setmealsListGlobalState (to change list of meals) and mealsListGlobalState (the actual array of meal objects)
-All components nested within MealsProvider have access to this data now

### `Header.js: <Header/>`

-h1 Title (Calorie Counter)
-Clear All Button:
.Deletes all meal items from localStorage and from Context global state, resetting meals display
.uses clearAllitemsClick()
-Imports AppBar component from MUI

### `AddMealForm.js: <AddMealForm/>`

-Allows user to add a single meal object (name and calorie count) to display
-imports the following from MUI: Paper for forms, TextField for inputs, Button for buttons
-Holds formValues in component state while user is filling out form, then resets formValues on submit
-Passes formValues to global state on submit

### `TotalCalories.js: <TotalCalories/>`

-Takes meal list from Context global state and calculates total calories amount for display
-Dynamically updates every time total calorie count changes (When a meal(s) is deleted, updated, or added)

### `MealDisplayContainer.js: <MealDisplayContainer/>`

-Takes meal list from Context global state and maps over it, producing a <SingleMeal/> for each
-The idea is to display the list of meals in a digestible manner
-Passes meal name, id and calorie count in as props to SingleMeal

### `SingleMeal.js: <SingleMeal/>`

-Imports EditIcon, Button and TextField from MUI for component usage
-Displays a single meal that was inputted by user (name and calorie count)
-Takes the name, id and calorie count of meal in as props from MealDisplayContainer.js
-Trash button to delete item

EDIT FUNCTIONALITY of SingleMeal:
-Edit button to pull up edit form:
.User toggles edit mode by hitting edit button (saved in state as boolean: isEditMode, setIsEditMode)
.User can change name and calorie count of meal in edit form
.User submits or cancels their edit, then component reverts back to default display mode
-function generateSingleMealEditForm is called when edit button is hit, then displays the edit form
