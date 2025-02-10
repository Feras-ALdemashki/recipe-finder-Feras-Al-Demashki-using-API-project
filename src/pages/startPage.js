import { START_BTN_ID } from "../constants.js";
import { USER_INTERFACE_ID } from "../constants.js";
import { createWelcomeElement } from "../views/startPageview.js";
import { initSearchPage } from "./searchPage.js";

export const initStartPage = () => {
  const userInterFaceDiv = document.getElementById(USER_INTERFACE_ID);
  userInterFaceDiv.innerHTML = "";
  const WelcomeElement = createWelcomeElement();
  userInterFaceDiv.appendChild(WelcomeElement);
  const startButton = document.getElementById(START_BTN_ID);
  startButton.addEventListener("click", initSearchPage);
};
