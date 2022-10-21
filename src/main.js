import fetchRecipeData from "./functions/fetchRecipeData";
import fetchRecipesUpper from "./functions/fetchRecipesUpper";
// import fetchRecipePageInfo from "./functions/fetchRecipePageData"

fetchRecipesUpper("salt")

const ingredients = document.getElementById('ingredient-field');
const mealType = document.getElementById('meal-type');
const cuisineType = document.getElementById('cuisine-type');
const dietType = document.getElementById('diet-type');
const time = document.getElementById('time-field');


const handleSubmit = document.getElementById('onSubmit');

handleSubmit.addEventListener('submit', ( event ) => {
    event.preventDefault();
        fetchRecipeData(
            ingredients.value,
            mealType.value,
            cuisineType.value,
            dietType.value,
            time.value
        )
}) ;

// fetchRecipePageInfo();

// const linkTorecipeInfoPage = document.getElementById('link-to-recipe-page')