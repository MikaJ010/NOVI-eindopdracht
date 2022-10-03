

export default function createRecipesCardUpper(arr) {



    const recipesListUpper = document.getElementById("random-recipe-container")


    recipesListUpper.innerHTML = ""
    arr.slice(0, 3).map((item) => {

        const roundedCalories = Math.round(item.recipe.calories)

        recipesListUpper.innerHTML += ` 
                     <li class="card">
                 <img class="recipe-card__img" src="${item.recipe.image}" alt="foodimage">
                 <div class="card-padding">
                 <h5 class="recipe-card__label">${item.recipe.label}</h5>
                 <p class="recipe-card__info">${roundedCalories}  Calories | ${item.recipe.ingredients.length} Ingredients</p>
 <!--                <span><img src="../../assets/icons/time.png" alt="time-icon"></span>-->
                 </div>
            </li>
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