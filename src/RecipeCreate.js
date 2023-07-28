import React, { useState } from "react";
import "./RecipeCreate.css"
function RecipeCreate({setRecipes, recipes}) {
    const initFormState = {
        name: "",
        cuisine: "",
        photo: "",
        ingredients: "",
        preparation: ""
    }
    const [recipe, setRecipe] = useState(initFormState)
    const submitHandler = (e) =>{
        e.preventDefault();
        setRecipes([...recipes, recipe])
        // console.log("Submitted: ",recipe);
        setRecipe(initFormState)
        // console.log("recipe after submit: ", recipe)
    }
    
    const changeHandler = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }
    // console.log(recipe.name)
    return (
    <form onSubmit={submitHandler} name="create">        
        <table>
            <tr>
                <td><input type="text" name="name" placeholder="Name" onChange={changeHandler} value={recipe.name}/></td>
                <td><input type="text" name="cuisine" placeholder="Cuisine" onChange={changeHandler} value={recipe.cuisine}/></td>
                <td><input type="url" name="photo" placeholder="URL" onChange={changeHandler} value={recipe.photo}/></td>
                <td><textarea type="textarea" name="ingredients" placeholder="Ingredients" onChange={changeHandler} value={recipe.ingredients}></textarea></td>
                <td><textarea type="textarea" name="preparation" placeholder="Preparation" onChange={changeHandler} value={recipe.preparation}></textarea></td>
                <td><button type="submit">Create</button></td>
            </tr>
        </table>
    </form>
    )
}

export default RecipeCreate;