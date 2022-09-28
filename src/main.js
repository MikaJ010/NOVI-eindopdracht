import fetchRecipeData from "./functions/fetchRecipeData";

const ingredients = document.getElementById('ingredient-field');
const mealType = document.getElementById('meal-type');

const handleSubmit = document.getElementById('onSubmit');

handleSubmit.addEventListener('submit', ( e ) => {
    e.preventDefault();
    if (ingredients.value === '') {
  //pls fill in required search query
    } else {
        fetchRecipeData(
            ingredients.value,
            mealType.value
        );
    }
}) ;

