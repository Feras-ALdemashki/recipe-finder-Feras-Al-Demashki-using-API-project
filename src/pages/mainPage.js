import { createSearchElement } from "../views/mainPageView.js";
import { USER_INTERFACE_ID } from "../constants.js";
import { SEARCH_BTN_ID } from "../constants.js";

export const initMainPage= () =>{
    const userInterFaceDiv= document.getElementById(USER_INTERFACE_ID)
    userInterFaceDiv.innerHTML=''
const SearchElementDiv = document.createElement('div')
SearchElementDiv.classList.add('search-div')
const searchElement = createSearchElement();
userInterFaceDiv.appendChild(searchElement);

}