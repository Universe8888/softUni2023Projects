// Create a program that keeps information about guests liked and disliked meals.

// You will be receiving lines with commands until you receive the "Stop" command. The possible commands are:

// "Like - {guest}-{meal}":
// 1. Add the meal to the guest's collection of meals.
// 2. If the guest does not exist, add them and their meal to your record.
// 3. If the guest already has the meal in their collection, do not add it.

// "Dislike-{guest}-{meal}":
// 1. Remove the meal of the guest's collection of liked meals and print:
// "{Guest} doesn't like the {meal}."
// You must keep the count of unliked meals of all unliked meals!
// 2. If the guest does not exist, print:
// "{Guest} is not at the party."
// 3. If the guest does not have the meal at the list, print:
// {Guest} doesn't have the {meal} in his/her collection."

// In the end, you should print the guests with their liked meals. Then print the count of unliked meals in the format below:

// "{Guest1}: {meal1}, {meal2} ... {mealN}
// {Guest2}: {meal1}, {meal2} ... {mealN}
// Unliked meals: {count of all unliked meals}"

// Input:
// You will be the receiving lines until you receive the "Stop" command.
// The input will always be valid.

//This text and code is only for testing purposes
// Copyright to SoftUni

function likedOrDislikedFoods(input) {
    const guestMeals = new Map();
    const unlikedMeals = new Map();
  
    function addMeal(guest, meal) {
      if (!guestMeals.has(guest)) {
        guestMeals.set(guest, new Set());
      }
  
      if (!guestMeals.get(guest).has(meal)) {
        guestMeals.get(guest).add(meal);
      }
    }
  
    function dislikeMeal(guest, meal) {
      if (!guestMeals.has(guest)) {
        console.log(`${guest} is not at the party.`);
      } else if (!guestMeals.get(guest).has(meal)) {
        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
      } else {
        guestMeals.get(guest).delete(meal);
  
        if (!unlikedMeals.has(meal)) {
          unlikedMeals.set(meal, 0);
        }
  
        unlikedMeals.set(meal, unlikedMeals.get(meal) + 1);
        console.log(`${guest} doesn't like the ${meal}.`);
      }
    }
  
    for (const line of input) {
      if (line === "Stop") {
        break;
      }
  
      const [command, guest, meal] = line.split("-");
  
      if (command === "Like") {
        addMeal(guest, meal);
      } else if (command === "Dislike") {
        dislikeMeal(guest, meal);
      }
    }
  
    for (const [guest, meals] of guestMeals) {
      console.log(`${guest}: ${Array.from(meals).join(', ')}`);
    }
  
    console.log(`Unliked meals: ${Array.from(unlikedMeals.values()).reduce((acc, val) => acc + val, 0)}`);
  }
  
  likedOrDislikedFoods(["Like-Krisi-shrimps", "Like-Krisi-soup", "Like-Penelope-dessert", "Like-Misho-salad", "Stop"]);
  
//  likedOrDislikedFoods(["Like-Krisi-shrimps", "Dislike-Vili-carp", "Dislike-Krisi-salad", "Stop"]);
  
//100 / 100 in Judge