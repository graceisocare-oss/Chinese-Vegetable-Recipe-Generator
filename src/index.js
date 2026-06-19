function displayRecipe(response) {
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
"You are good at finding short vegetable recipes.  I need you to generate a short Chinese Vegetable Recipe in basic HTML and separate each line with a <br />.  Follow the user instructions.  Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe NOT at the beginning.";
let prompt = `User instructions: Generate a Chinese Vegetable recipe for ${instructionsInput.value}`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement = document.querySelector("#chineseVegetableRecipes");
recipeElement.classList.remove("hidden");
recipeElement.innerHTML = `<div class="generating">Generating a Chinese Vegetable recipe for ${instructionsInput.value}</div>`;

axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe); 