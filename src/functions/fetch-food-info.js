import axios from "axios";

async function fetchFoodInfo (ingredient) {

    const URI = 'https://api.edamam.com';
    const ENDPOINT = '/api/food-database/v2/parser';
    // API id + key (in readme zetten en uitleggen waar te plaatsen)
    const API_ID = 'd0353355';
    const API_KEY = '616db733cb6d4683893c918787403171';

    try {

        const response = await axios.get(URI + ENDPOINT, {
            params: {
                app_id: API_ID,
                app_key: API_KEY,
                ingr: ingredient,
            }
        })

        const foodSearched = response.data;
        const foodFound = foodSearched.parsed[0].food;
        const foodName = foodFound.label;
        const foodWeight = foodSearched.hints[0].measures[0].weight;
        const foodCalories = foodFound.nutrients.ENERC_KCAL;
        const foodFat = Math.round(foodFound.nutrients.FAT);
        const foodCarbs = Math.round(foodFound.nutrients.CHOCDF);

        const ingredientOverview = document.getElementById("calculator-product-info-data");
        ingredientOverview.replaceChildren();

        ingredientOverview.innerHTML += `
            <td>${foodName}</td>
            <td>${foodWeight}</td>
            <td>gram</td>
            `

        const submitServingAmount = document.getElementById("calculator-servings-form__input");
        const addServingButton = document.getElementById("calculator__servings-form");

        addServingButton.addEventListener("submit", (e) => {
            e.preventDefault();

            const caloriesServingTotal = submitServingAmount.value * foodCalories;
            const fatServingTotal = submitServingAmount.value * foodFat;
            const carbsServingTotal = submitServingAmount.value * foodCarbs;

            const servingOverview = document.getElementById("calculator-data-table");
            const row = servingOverview.insertRow(1);
            const cellName = row.insertCell(0);
            const cellCalories = row.insertCell(1);
            const cellFat = row.insertCell(2);
            const cellCarb = row.insertCell(3);
            cellName.innerHTML = foodName;
            cellCalories.innerHTML = caloriesServingTotal;
            cellCalories.className = "serving-calories";
            cellFat.innerHTML = fatServingTotal;
            cellFat.className = "serving-fat"
            cellCarb.innerHTML = carbsServingTotal;
            cellCarb.className = "serving-carbs"


            //--------------totaal calorieen---------//

            const servingInfoCal = document.getElementsByClassName("serving-calories");
            const totalCaloriesArray = []

            for (let i = 0; i < servingInfoCal.length ; i++) {
                totalCaloriesArray.push(servingInfoCal[i].innerText);
            }

            const caloriesStringToNum = totalCaloriesArray.map(str => {
                return Number(str);
            })
            const initialValueCal = 0;
            const totalAllCalories = caloriesStringToNum.reduce(
                (previousValue, currentValue) => previousValue + currentValue, initialValueCal
            );

            let calculatorTotalCal = document.getElementById("calculator-total-calories");
            calculatorTotalCal.innerHTML = totalAllCalories;

            //--------------totaal vet---------//

            const servingInfoFat = document.getElementsByClassName("serving-fat");
            const totalFatArray = []

            for (let i = 0; i < servingInfoFat.length ; i++) {
                totalFatArray.push(servingInfoFat[i].innerText);
            }

            const FatStringToNum = totalFatArray.map(str => {
                return Number(str);
            })
            const initialValueFat = 0;
            const totalAllFat = FatStringToNum.reduce(
                (previousValue, currentValue) => previousValue + currentValue, initialValueFat
            );

            let calculatorTotalFat = document.getElementById("calculator-total-fat");
            calculatorTotalFat.innerHTML = totalAllFat;

            //    -------------totaal carbs---------

            const servingInfoCarbs = document.getElementsByClassName("serving-carbs");
            const totalCarbsArray = []

            for (let i = 0; i < servingInfoCarbs.length ; i++) {
                totalCarbsArray.push(servingInfoCarbs[i].innerText);
            }

            const CarbsStringToNum = totalCarbsArray.map(str => {
                return Number(str);
            })
            const initialValueCarbs = 0;
            const totalAllCarbs = CarbsStringToNum.reduce(
                (previousValue, currentValue) => previousValue + currentValue, initialValueCarbs
            );

            let calculatorTotalCarbs = document.getElementById("calculator-total-carbs");
            calculatorTotalCarbs.innerHTML = totalAllCarbs;


        })



    } catch (e) {
        console.error(e);
    }
} export default fetchFoodInfo;