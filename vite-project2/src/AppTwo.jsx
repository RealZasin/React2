import React, { useState } from "react";
import "./App.css";

function App() {
  const [showRecipe, setShowRecipe] = useState(false);

  const ingredients = [
    "2 boneless, skinless chicken breasts",
    "2 tablespoons extra virgin olive oil",
    "3 garlic cloves, minced",
    "Juice of 1 lemon",
    "Salt and pepper, to taste",
    "Optional: Fresh herbs (like parsley or thyme) for garnish",
  ];

  const instructions = [
    "Pat the chicken breasts dry with paper towels.",
    "Season both sides of the chicken breasts with salt and pepper.",
    "Heat the olive oil in a skillet over medium heat.",
    "Add the minced garlic and sauté for about 1 minute.",
    "Place the chicken breasts in the skillet and cook for 6-7 minutes on each side.",
    "After flipping the chicken the first time, squeeze lemon juice over the chicken.",
    "Once cooked, transfer the chicken breasts to plates.",
    "Optional: garnish with fresh herbs.",
  ];

  return (
    <div className="App">
      <h1>Garlic Lemon Chicken Recipe</h1>
      <button onClick={() => setShowRecipe(!showRecipe)}>Show Recipe</button>
      {showRecipe && (
        <div>
          <h2>Ingredients:</h2>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2>Instructions:</h2>
          <ol>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default App;
