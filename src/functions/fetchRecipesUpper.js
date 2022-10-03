
import axios from "axios";
import createRecipesCardUpper from './createRecipesCardUpper';


 export default async function fetchRecipesUpper(ingredient) {


    const URI = "https://api.edamam.com";
    const ENDPOINT = "/api/recipes/v2";
    const API_ID = "5bfce901";
    const API_KEY = "0429e1bb472814f5b7f052c5e546afac";


    try {

        const response = await axios.get(URI + ENDPOINT, {
            params: {
                type: "public",
                app_id: API_ID,
                app_key: API_KEY,
                q: ingredient,
                random: true
            }
        })



        const arrayOfRecipes = response.data.hits
        createRecipesCardUpper(arrayOfRecipes)


        arrayOfRecipes.slice(0, 2)


    } catch (e) {

        const error = document.getElementById("upper-error")

        if (e.response.status === 404) {
            error.textContent = "page not found"
        } else if (e.response.status === 500) {
            error.textContent = "internal server error"
        }
    }
}


// fetchRecipesUpper('salt');
// import axios from 'axios';
// import createRecipesCardUpper from './createRecipesCardUpper';
//
//
// // Fetching data from API Edamam
// async function fetchRecipesUpper(searchQ) {
//     // Declare input value for API
//     const URI = 'https://api.edamam.com';
//     const ENDPOINT = '/api/recipes/v2';
//     // API id + key (in readme zetten en uitleggen waar te plaatsen)
//     const API_ID = '5bfce901';
//     const API_KEY = '0429e1bb472814f5b7f052c5e546afac';
//
//     // If successful
//     try {
//         const response = axios.get(URI + ENDPOINT, {
//             params: {
//                 type: "public",
//                 app_id: API_ID,
//                 app_key: API_KEY,
//                 q: searchQ,
//                 random: true,
//             }
//         });
//
//         // console.log(response.data.hits)
//         const arrayOfRecipes = response.data.hits;
//         arrayOfRecipes.slice(0, 2)
//
//         createRecipesCardUpper(arrayOfRecipes);
// // catch error en show in UI
//     } catch (e) {
//         const error = document.getElementById('upper-error');
//         error.innertext = '';
//         if (e.response.status === 404) {
//             error.innerText = 'page not found'
//         } else if (e.response.status === 500) {
//             error.innerText = 'internal server error'
//         }
//
//     }
// }
//
// // fetchRecipesUpper('salt');