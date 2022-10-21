

export default function createRecipesCardUpper(arr) {



    const recipesListUpper = document.getElementById("random-recipe-container")
    recipesListUpper.innerHTML = ""


    const timeIcon = new Image();
    timeIcon.src = require("../../assets/icons/time.svg");



    arr.slice(0, 3).map((item) => {

        const id = item.recipe.uri.split("_")[1];
        const roundedCalories = Math.round(item.recipe.calories)

        recipesListUpper.innerHTML += `
            <li class="card">
            <a href="pages/recipe-page.html?id=${id}">
                <img class="recipe-card__img" src="${item.recipe.image}" alt="foodimage">
                <div class="card-padding">
                <h5 class="recipe-card__label">${item.recipe.label.slice(0, 35)}</h5>
                <div class="card-content-position"><p class="recipe-card__info"><strong>${roundedCalories}</strong> Calories | <strong>${item.recipe.ingredients.length}</strong> Ingredients <span class="margin-text-card"></span><img class='time-icon' src=${timeIcon.src} alt="timeIcon"> ${item.recipe.totalTime} min.</p> </div>
                </div>
            </a>
            </li> 
        `
    })
}