

export default function createRecipesCardUpper(arr) {



    const recipesListUpper = document.getElementById("random-recipe-container")


    recipesListUpper.innerHTML = ""
    const timeIcon = new Image();
    timeIcon.src = require("../../assets/icons/time.svg");



    arr.slice(0, 3).map((item) => {
        const roundedCalories = Math.round(item.recipe.calories)

        recipesListUpper.innerHTML += `
            <li class="card"><a href="https://google.com">
                <img class="recipe-card__img" src="${item.recipe.image}" alt="foodimage">
                <div class="card-padding">
                <h5 class="recipe-card__label">${item.recipe.label.slice(0, 35)}</h5>
                <div class="card-content-position"><p class="recipe-card__info"><strong>${roundedCalories}</strong> Calories | <strong>${item.recipe.ingredients.length}</strong> Ingredients <span class="margin-text-card"></span><img class='time-icon' src=${timeIcon.src} alt="timeIcon"> ${item.recipe.totalTime} min.</p> </div>
                </div>
            </a></li> 
        `
    })
}


// export default function createRecipesCardUpper(arr) {
//     const recipeListUpper = document.getElementById('random-recipe-container');
//     recipeListUpper.innerHTML = '';
//
//     arr.slice(0, 3).map((item) => {
//
//             //rounding down calories
//             const caloriesRounded = Math.round(item.recipe.calories);
//
//             recipeListUpper.innerHTML += `
//             <li class="card">
//                 <img class="recipe-card__img" src="${item.recipe.image}" alt="foodimage">
//                 <div class="card-padding">
//                 <h5 class="recipe-card__label">${item.recipe.label}</h5>
//                 <p class="recipe-card__info">${caloriesRounded}  Calories | ${item.recipe.ingredients.length} Ingredients</p>
// <!--                <span><img src="../../assets/icons/time.png" alt="time-icon"></span>-->
//                 </div>
//             </li>
//         `
//         }
//     )
//