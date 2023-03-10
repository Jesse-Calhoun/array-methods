
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

function filterExample(){
    //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
    let results;
    results = dishes.filter(function(dish){
        console.log("el inside filterExample's filter: ", dish)
        if(dish.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

// let mexicanFood = filterExample();
// console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function filterVegetarian(){
    let results= dishes.filter(function(dish){
        if (dish.cuisine === 'Vegetarian'){
            return true;
        }
    })

    return results;
}

let vegetarianFood = filterVegetarian();
console.log('vegetarianFood from filterVegetarian', vegetarianFood)

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

function userFavoriteCuisine(){
    let favoriteTypeOfFood = prompt('What is your favorite cuisine?');
    let results = dishes.filter(function(dish){
        if (dish.cuisine === favoriteTypeOfFood){
            return true;
        }
    })
    return results
}

let favoriteCuisineDishes = userFavoriteCuisine();
console.log('favoriteCuisineDishes from userFavoriteCuisine', favoriteCuisineDishes)

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function filterLargeItalian (){
    let results = dishes.filter(function(dish){
        if (dish.cuisine === 'Italian' & dish.servings > 5){
            return true;
        }
    })
    return results;
}

let largeItalianDishes = filterLargeItalian();
console.log('largeItalianDishes from filterLargeItalian', largeItalianDishes)


//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function filterIdServingMatches (){
    let results = dishes.filter(function(dish){
        if (dish.id === dish.servings){
            return true;
        }
    })
    return results;
}

let idServingMatchDishes = filterIdServingMatches();
console.log('idServingMatchDishes from filterIdServingMatches', idServingMatchDishes)

//5. Create a function that will return only dishes whose serving count is even.
//Filter

function filterEvenCountDishes(){
    let results = dishes.filter(function(dish){
        if (dish.servings%2 === 0){
            return true;
        }
    })
    return results;
}


let evenCountDishes = filterEvenCountDishes();
console.log('evenCountDishes from filterEvenCountDishes', evenCountDishes)

//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

function includesChickpea(){
    let results = dishes.filter(function(dish){
        if (dish.ingredients.includes('chickpea')){
            return true;
        }
    })
    return results;
}

let hasChickpea = includesChickpea();
console.log('hasChickpea from includesChickpea', hasChickpea)

//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

function includesUserIngredient(){
    let newArray = [];
    let response = prompt('What ingredient would you like your dish to include?').toLowerCase();
    let results = dishes.filter(function(dish){
        if (dish.ingredients.includes(response)){
            newArray.push(dish);
        }
    })
    return newArray;
}

let userDishes = includesUserIngredient();
console.log('userDishes from includesUserIngredient', userDishes)

//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

function getCuisineTypes(){
    let newArray = [];
    let results = dishes.map(function(dish){
        newArray.push(dish.cuisine);
    }
    )
    return newArray;
}

let cuisineTypes = getCuisineTypes();
console.log('cuisineTypes from getCuisineTypes', cuisineTypes)

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

function combineCuisineTypeAndName(){
    let newArray = [];
    let results = dishes.map(function(dish){
        newArray.push(dish.name + ' ' + dish.cuisine);
    })
    return newArray;
}

let combinedCuisineAndNames = combineCuisineTypeAndName();
console.log('combinedCuisineAndNames from combineCuisineTypeAndName', combinedCuisineAndNames)

//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

function combineVegetarianAndName(){
    let newArray = [];
    let results = dishes.map(function(dish){
        if (dish.cuisine === 'Vegetarian'){
            newArray.push(dish.cuisine + ' ' + dish.name);
        }
    })
    return newArray
}

let combinedVegetarianAndName = combineVegetarianAndName();
console.log('combinedVegetarianAndName from combineVegetarianAndName', combinedVegetarianAndName)

//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

function removeDuplicates(array){
    return array.filter((el, index) => array.indexOf(el) === index);
}

let cuisineOptions = removeDuplicates(cuisineTypes);
console.log('cuisineOptions form removeDuplicates', cuisineOptions)

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function findTomatoOrCheese(){
    let results = dishes.filter(function(dish){
        if(dish.ingredients.includes('tomato') || dish.ingredients.includes('cheese')){
            return true;
        }
    })
    return results
}

let tomatoOrCheeseDishes = findTomatoOrCheese();
console.log('tomatoOrCheeseDishes from findTomatoOrCheese', tomatoOrCheeseDishes)
//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

function getTotalServingCount(){
    let results = dishes.reduce(function(total, dish, servings){
        return total + dish.servings;
    },0)
    return results
}

let totalServings = getTotalServingCount();
console.log('totalServings from getTotalServingCount', totalServings)
//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
