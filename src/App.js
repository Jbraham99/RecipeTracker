
import './App.css';
import RecipeCreate from './RecipeCreate';
import RecipeData from './RecipeData';
import RecipeList from './RecipeList';
import Header from './Header';
import React, { useState } from 'react';
function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  // console.log(RecipeData)
  return (
    <>
    <Header />
    <RecipeList data={recipes} setRecipes={setRecipes} recipes={recipes}/>
    <RecipeCreate setRecipes={setRecipes} recipes={recipes}/>
    </>
  );
}

export default App;
