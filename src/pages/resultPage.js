import { fetchData } from "../data.js";
import { ingredients_DATA_URL } from "../constants.js";
import { RESULT_DIV_ID } from "../constants.js";
import { MEALS_DATA_URL } from "../constants.js";
import { noMAtchFound } from "../views/noMatchFoundView.js";

export const initResultsPage = async () => {
  // get the user input to use it in fetching data
  const ingredient = localStorage.getItem("searchedIngredient");
  // fetching data based on ingredients
  const apiUrl = `${ingredients_DATA_URL}${ingredient}`;

  const data = await fetchData(apiUrl);
  const mealsDiv = document.getElementById(RESULT_DIV_ID);
  mealsDiv.innerHTML = "";
  // if the user input doesn't match any ingredient in the data
  if (!data.meals) {
    const noMAtch = noMAtchFound();
    mealsDiv.appendChild(noMAtch);
    return;
  }
  //rendering cards for each meal
  data.meals.forEach((meal) => {
    const card = document.createElement("div");
    card.classList.add("meal-card");
    card.innerHTML = String.raw`
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h1>${meal.strMeal}</h1>`;
    // show the details for each meal
    const mealID = meal.idMeal;
    // render meal details and description when the user click on card
    const showDetails = async () => {
      // add class to blur the background
      const mainDiv = document.querySelector(".main-div");
      mainDiv.classList.add("blurred");
      // remove the old div when the user click on another card
      const existingPopUp = document.querySelector(".pop-up");
      if (existingPopUp) {
        existingPopUp.remove();
      }
      const mealUrl = `${MEALS_DATA_URL}${mealID}`;
      // fetching the data for meal ID
      const mealData = await fetchData(mealUrl);
      const mealInstruction = mealData.meals[0].strInstructions;
      const mealYoutubeLink = mealData.meals[0].strYoutube;
      const mealName = mealData.meals[0].strMeal;
      // creating a div to show the meals details
      const popUpDiv = document.createElement("div");
      popUpDiv.classList.add("pop-up");
      const popUp = document.createElement("div");
      popUp.innerHTML = String.raw`
        <h1>${mealName}</h1>
    <p>${mealInstruction}<hr>Click the link  to watch the video tutorial: <a href=${mealYoutubeLink} target="_blank">${mealName} </a></p>
    <button id="closePopUpBtn" class="close-pop-up-btn">close</button>
       `;
      popUpDiv.appendChild(popUp);
      document.body.appendChild(popUpDiv);
      // close button to remove the meal description div
      popUp.querySelector(".close-pop-up-btn").addEventListener("click", () => {
        popUpDiv.remove();
        mainDiv.classList.remove("blurred");
      });
    };
    card.addEventListener("click", showDetails);
    mealsDiv.appendChild(card);
  });
};
