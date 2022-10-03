import fetchRecipeData from "./functions/fetchRecipeData";
import fetchRecipesUpper from "./functions/fetchRecipesUpper";

fetchRecipesUpper("salt")

const ingredients = document.getElementById('ingredient-field');
const mealType = document.getElementById('meal-type');
const cuisineType = document.getElementById('cuisine-type');
const dietType = document.getElementById('diet-type');
const time = document.getElementById('time-field');


const handleSubmit = document.getElementById('onSubmit');

handleSubmit.addEventListener('submit', ( e ) => {
    e.preventDefault();
    if (ingredients.value === '') {
  //pls fill in required search query
    } else {
        fetchRecipeData(
            ingredients.value,
            mealType.value,
            cuisineType.value,
            dietType.value,
            time.value
        );
    }
}) ;

