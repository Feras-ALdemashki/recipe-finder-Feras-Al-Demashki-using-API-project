import { fetchData } from "../data.js";
import { ingredients_DATA_URL } from "../constants.js";
import { RESULT_DIV_ID } from "../constants.js";
import { MEALS_DATA_URL } from "../constants.js";

export const initResultsPage = async () => {
  const ingredient = localStorage.getItem("searchedIngredient");
  const apiUrl = `${ingredients_DATA_URL}${ingredient}`;
  try {
    const data = await fetchData(apiUrl);
    const mealsDiv = document.getElementById(RESULT_DIV_ID);
    mealsDiv.innerHTML = "";

    if (!data.meals) {
      mealsDiv.innerHTML = "<p>No meals found for this ingredient.</p>";
      return;
    }
    data.meals.forEach((meal) => {
      const card = document.createElement("div");
      card.classList.add("meal-card");
      card.innerHTML = String.raw`
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h1>${meal.strMeal}</h1>`;

      const mealID = meal.idMeal;
      const showDetails = async () => {
        const existingPopUp = document.querySelector(".pop-up");
        if (existingPopUp) {
          existingPopUp.remove();
        }
        const mealUrl = `${MEALS_DATA_URL}${mealID}`;
        const mealData = await fetchData(mealUrl);
        const mealInstruction = mealData.meals[0].strInstructions;
        const mealYoutubeLink = mealData.meals[0].strYoutube;
        const mealName = mealData.meals[0].strMeal;
        const popUpDiv = document.createElement("div");
        popUpDiv.classList.add("pop-up");
        const popUp = document.createElement("div");
        popUp.innerHTML = "";
        popUp.innerHTML = String.raw`
        <h1>${mealName}</h1>
    <p>${mealInstruction}<hr>Watch video: <a href=${mealYoutubeLink} target="_blank">Youtube </a></p>
    <button id="closePopUpBtn" class="close-pop-up-btn">close</button>
       `;
        popUpDiv.appendChild(popUp);
        document.body.appendChild(popUpDiv);

        popUp
          .querySelector(".close-pop-up-btn")
          .addEventListener("click", () => {
            popUpDiv.remove();
          });
      };
      card.addEventListener("click", showDetails);

      mealsDiv.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
};
