import React from "react";

function RecipeMap({ recipe , deleteRecipe }) {
 return (
        <tr>
            <td className="content_td"><p>{recipe.name}</p></td>
            <td className="content_td"><p>{recipe.cuisine}</p></td>
            <td><p><img src={recipe.photo} /></p></td>
            <td className="content_td" style={{width: "30%"}} ><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td className="content_td"><button name="delete" onClick={deleteRecipe}>delete</button></td>
        </tr>
    )}




export default RecipeMap;