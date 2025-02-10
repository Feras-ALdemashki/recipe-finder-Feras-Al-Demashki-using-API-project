import { INGREDIENTS_INPUT_ID } from "../constants.js";
import { SEARCH_BTN_ID } from "../constants.js";
export const createSearchElement = () => {
  const element = document.createElement("div");
  element.classList.add("search-div");
  element.innerHTML = String.raw`
    <h1>Enter the ingredient you're looking for</h1>
    <div class="form-control">
      <input type="text" id="${INGREDIENTS_INPUT_ID}" class="user-input"  required>
      <label for="${INGREDIENTS_INPUT_ID}"><span>Ingredient</span></label>
    </div>
    <button id="${SEARCH_BTN_ID}" class='search-btn'>Search</button>
    `;
  return element;
};
