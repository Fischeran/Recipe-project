import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initValue = {
    name: "", cuisine: "", photo: "", ingredients: "", preparation: ""
  }

  const [formData, setFormData] = useState({...initValue})

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    addRecipe(formData);
    setFormData({...initValue})
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr style={{ display: "flex", justifyContent: "safeCenter"}}>
            <td>
              <input style={{objectFit: "contain", width: "80%"}} type="text" name="name" id="name" placeholder="name" value={formData.name} onChange={handleChange} required />
            </td>
            <td>
              <input style={{objectFit: "contain", width: "80%"}} type="text" name="cuisine" id="cuisin" placeholder="Cuisine" value={formData.cuisine} onChange={handleChange} required />
            </td>
            <td>
              <input style={{objectFit: "contain", width: "80%"}} type="url" name="photo" id="photo" placeholder="URL" value={formData.photo} onChange={handleChange} required />
            </td>
            <td>
              <textarea style={{objectFit: "contain", width: "70%"}} type="text" name="ingredients" id="ingredients" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange} required />
            </td>
            <td>
              <textarea style={{objectFit: "contain", width: "70%"}} type="text" name="preparation" id="preparation" placeholder="preparation" value={formData.preperation} onChange={handleChange}  required />
            </td>
            <td>
              <button style={{objectFit: "contain"}} type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
