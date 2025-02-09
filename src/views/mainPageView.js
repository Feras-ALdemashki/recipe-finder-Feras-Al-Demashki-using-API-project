import { INGREDIENTS_INPUT_ID } from "../constants.js";
import { SEARCH_BTN_ID } from "../constants.js";
export const createSearchElement = () => {
  const element = document.createElement("div");
  element.classList.add("search-div");
  element.innerHTML = String.raw`
     <h1 class = "please enter the ingredient you are looking for"</h1>
    <label for="${INGREDIENTS_INPUT_ID}"  class="ingredient"> Ingredient </label>
    <input type="text" id ="${INGREDIENTS_INPUT_ID}" placeholder="Type here">
    <button id="${SEARCH_BTN_ID}">Search</button>
    `;
  return element;
};
