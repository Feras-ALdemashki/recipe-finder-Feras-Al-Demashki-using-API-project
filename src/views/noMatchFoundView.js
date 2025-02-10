// if the user typed an ingredient not in the data
export const noMAtchFound = () => {
  const element = document.createElement("div");
  element.classList.add("no-match-found");
  element.innerHTML = String.raw`
  <p>No meals found for this ingredient.</p>
  `;
  return element;
};
