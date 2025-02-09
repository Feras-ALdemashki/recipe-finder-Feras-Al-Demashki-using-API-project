import { createSearchElement } from "../views/mainPageView.js";
import { USER_INTERFACE_ID } from "../constants.js";
import { SEARCH_BTN_ID } from "../constants.js";
import { INGREDIENTS_INPUT_ID } from "../constants.js";
import { initResultsPage } from "./resultPage.js";

export const initMainPage = () => {
  const userInterFaceDiv = document.getElementById(USER_INTERFACE_ID);
  userInterFaceDiv.innerHTML = "";

  const searchElement = createSearchElement();
  userInterFaceDiv.appendChild(searchElement);
  const ingredientInput = document.getElementById(INGREDIENTS_INPUT_ID);
  const searchButton = document.getElementById(SEARCH_BTN_ID);

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      const ingredientValue = ingredientInput.value.trim();
      if (ingredientValue) {
        localStorage.setItem("searchedIngredient", ingredientValue);
        initResultsPage();
      } else {
        alert("Please enter an ingredient!");
      }
    });
  }
};
