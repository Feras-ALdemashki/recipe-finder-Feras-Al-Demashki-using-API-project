import { createSearchElement } from "../views/searchPageView.js";
import { USER_INTERFACE_ID } from "../constants.js";
import { SEARCH_BTN_ID } from "../constants.js";
import { INGREDIENTS_INPUT_ID } from "../constants.js";
import { initResultsPage } from "./resultPage.js";

export const initSearchPage = () => {
  const userInterFaceDiv = document.getElementById(USER_INTERFACE_ID);
  userInterFaceDiv.innerHTML = "";
  const searchElement = createSearchElement();
  userInterFaceDiv.appendChild(searchElement);
  const ingredientInput = document.getElementById(INGREDIENTS_INPUT_ID);
  const searchButton = document.getElementById(SEARCH_BTN_ID);

  const handleSearch = () => {
    const ingredientValue = ingredientInput.value.trim();
    if (ingredientValue) {
      // store the user input to use it later in fetching data
      localStorage.setItem("searchedIngredient", ingredientValue);
      initResultsPage();
    } else {
      alert("Please enter an ingredient!");
    }
  };
  searchButton.addEventListener("click", handleSearch);
  ingredientInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
};
