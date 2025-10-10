document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("recipe-search");
    const resultsDiv = document.getElementById("recipe-results");

    if (searchInput && resultsDiv) {
        const recipes = [
            { name: "Avocado Toast", ingredients: ["avocado", "bread", "egg"], description: "A simple, energizing breakfast." },
            { name: "Green Smoothie", ingredients: ["spinach", "banana", "milk"], description: "Perfect for a quick nutrient boost." },
            { name: "Grilled Chicken Salad", ingredients: ["chicken", "lettuce", "tomato"], description: "A light and protein-packed meal." },
            { name: "Oatmeal Bowl", ingredients: ["oats", "milk", "honey"], description: "A heart-healthy start to your day." },
            { name: "Veggie Stir-fry", ingredients: ["broccoli", "carrot", "soy sauce"], description: "A colorful, nutritious lunch." }
        ];

        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase().trim();
            resultsDiv.innerHTML = "";

            if (query === "") return;

            const filtered = recipes.filter(
                recipe =>
                    recipe.name.toLowerCase().includes(query) ||
                    recipe.ingredients.some(ing => ing.toLowerCase().includes(query))
            );

            if (filtered.length > 0) {
                filtered.forEach(recipe => {
                    const recipeCard = document.createElement("div");
                    recipeCard.classList.add("recipe-card");
                    recipeCard.innerHTML = `
            <h4>${recipe.name}</h4>
            <p>${recipe.description}</p>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
          `;
                    resultsDiv.appendChild(recipeCard);
                });
            } else {
                resultsDiv.innerHTML = "<p>No recipes found. Try another search!</p>";
            }
        });
    }
});
