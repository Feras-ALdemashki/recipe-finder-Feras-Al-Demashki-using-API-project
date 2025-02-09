import { fetchData } from "../data.js"
import { ingredients_DATA_URL } from "../constants.js"
import { RESULT_DIV_ID } from "../constants.js"


export const initResultsPage = async () =>{
 const ingredient = localStorage.getItem("searchedIngredient")
  const apiUrl = `${ingredients_DATA_URL}${ingredient}`

  try {
    const data = await fetchData(apiUrl)
    const mealsDiv = document.getElementById(RESULT_DIV_ID)
    mealsDiv.innerHTML=''

    if (!data.meals) {
      mealsDiv.innerHTML = "<p>No meals found for this ingredient.</p>"
      return
    }

    data.meals.forEach(meal => {
      const card = document.createElement('div')
      card.classList.add('meal-card')
      card.innerHTML = String.raw`
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h1>${meal.strMeal}</h1>
      
      `
       
      mealsDiv.appendChild(card)
    })
  }catch(error){
    console.log(error)
  }
}