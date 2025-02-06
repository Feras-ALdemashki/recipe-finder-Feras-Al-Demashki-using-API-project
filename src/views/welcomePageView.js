import { START_BTN_ID } from "../constants.js";
 export const createWelcomeElement = () =>{
  const welcomeElement = document.createElement('div');
  welcomeElement.classList.add('welcome-div')
  welcomeElement.innerHTML= String.raw`
  <h1 class = "welcome-text">find the recipe for your main ingredient here</h1>
  <button id=${START_BTN_ID}>start</button>
  `
  return welcomeElement
}