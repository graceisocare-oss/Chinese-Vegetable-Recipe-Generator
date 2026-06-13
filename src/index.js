function displayRecipe(response) {

    console.log("recipe generated");
   new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
});
}

function generaterecipe(event) {
    event.preventDefault();
let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "7a4f5a11f027034d307t909d5doccba8";
let context = 
"You are well known for finding interesting recipes.  I need you to generate a Chinese, easy to follow Vegetable Recipe in basic HTML and separate each line with a <br />.  Make sure to follow the user instructions.  Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
let prompt = `User instructions: Generate a Chinese Vegetable recipe for ${instructionsInput.value}`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#recipe");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">Generating a Chinese Vegetable recipe for ${instructionsInput.value}</div>`;

console.log("Generating recipe");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`); 

axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe); 