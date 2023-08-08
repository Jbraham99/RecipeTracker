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
        setRecipe(initFormState)
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
                <td><input type="text" name="name" placeholder="Name" onChange={changeHandler} value={recipe.name} required/></td>
                <td><input type="text" name="cuisine" placeholder="Cuisine" onChange={changeHandler} value={recipe.cuisine} required/></td>
                <td><input type="url" name="photo" placeholder="URL" onChange={changeHandler} value={recipe.photo} required/></td>
                <td><textarea type="textarea" name="ingredients" placeholder="Ingredients" onChange={changeHandler} value={recipe.ingredients} required></textarea></td>
                <td><textarea type="textarea" name="preparation" placeholder="Preparation" onChange={changeHandler} value={recipe.preparation} required></textarea></td>
                <td><button type="submit">Create</button></td>
            </tr>
        </table>
    </form>
    )
}

export default RecipeCreate;