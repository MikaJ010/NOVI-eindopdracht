export default function createRecipeCard(arr) {
    const recipeList = document.getElementById('main__recipe-list');
    recipeList.innerHTML = '';

    arr.slice(0, 18).map((item) => {

        //rounding down calories
        const caloriesRounded = Math.round(item.recipe.calories);

        recipeList.innerHTML += `
            <li class="card">
                <img class="recipe-card__img" src="${item.recipe.image}" alt="foodimage">
                <div class="card-padding">
                <h5 class="recipe-card__label">${item.recipe.label}</h5>
                <p class="recipe-card__info">${caloriesRounded}  Calories | ${item.recipe.ingredients.length} Ingredients</p></div>

            </li>
        `
        }
    )
}