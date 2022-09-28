function randomRecipe(arrOfRecipes) {
    return arrOfRecipes[Math.floor(Math.random()*arrOfRecipes.length)];
}

console.log(randomRecipe(arrayOfRecipes))