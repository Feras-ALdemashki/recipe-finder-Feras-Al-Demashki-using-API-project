import { USER_INTERFACE_ID } from "../constants.js";
import { RESULT_DIV_ID } from "../constants.js";

export const renderErrors = (err) => {
  const resultDiv = document.getElementById(RESULT_DIV_ID);
  resultDiv.innerHTML = "";
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";
  const element = document.createElement("div");
  element.classList.add("error");
  element.innerHTML = String.raw`
<h1>oops! something went wrong :${err}
</h1>
`;
  userInterface.appendChild(element);
};
