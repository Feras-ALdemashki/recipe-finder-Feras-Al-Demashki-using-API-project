import { START_BTN_ID } from "../constants.js";
export const createWelcomeElement = () => {
  const welcomeElement = document.createElement("div");
  welcomeElement.classList.add("welcome-div");
  welcomeElement.innerHTML = String.raw`
  <h1>Welcome to the  Recipe Finder</h1>
<p>Discover the perfect recipe for any ingredient you have on hand.</p>
<p>Make your cooking experience effortless and enjoyable.</p>
<p>Click "Start" to begin your culinary journey.</p>

  <button id=${START_BTN_ID} class="start-btn" >Start Cooking</button>
  `;
  return welcomeElement;
};
