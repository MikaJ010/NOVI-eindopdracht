import axios from 'axios';
import createRecipeCard from './createRecipeCard';


// Fetching data from API Edamam
export default async function fetchRecipeData( searchQuery, mealType) {
    // Declare input value for API
    const URI = 'https://api.edamam.com';
    const ENDPOINT = '/api/recipes/v2';
    // API id + key (in readme zetten en uitleggen waar te plaatsen)
    const API_ID = '5bfce901';
    const API_KEY = '0429e1bb472814f5b7f052c5e546afac';

    // If successful
    try {
        const response = await axios.get(URI + ENDPOINT, {
            params: {
                type: "public",
                app_id: API_ID,
                app_key: API_KEY,
                q: searchQuery,
                mealType: mealType || null,
                random: true
            }
        });

        // console.log(response.data.hits)
        const arrayOfRecipes = response.data.hits;

        createRecipeCard(arrayOfRecipes);
// catch error en show in UI
    } catch (e) {
        const error = document.getElementById('main-error');

        if (e.response.status === 404) {
            error.innerText = 'page not found'
        } else if (e.response.status === 500) {
            error.innerText = 'internal server error'
        }

    }
}
