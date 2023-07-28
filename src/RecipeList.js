import React from "react";

function RecipeList({data=[], setRecipes, recipes}) {
  console.log(data, "recipeListData****")
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const deleteHandler = (e) => {
    e.preventDefault();
    const updatedArray = recipes.filter((recipe, index)=> index !== Number(e.target.id))
    setRecipes(updatedArray)
  }
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {data.map((recipe, index)=>{
            return (
                <tr>
                    <td>{recipe.name}</td>
                    <td>{recipe.cuisine}</td>
                    <td><img src={recipe.photo} height="150px"/></td>
                    <td>{recipe.ingredients}</td>
                    <td>{recipe.preparation}</td>
                    <td><button name="delete" id={index} type="delete" onClick={deleteHandler}>Delete</button></td>
                </tr>
            )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
