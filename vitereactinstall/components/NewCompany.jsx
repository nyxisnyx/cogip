import React, { useState } from "react";

const NewCompany = () => {
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]:value}))
    }
        
        const handleSubmit = (event) => {
            event.preventDefault();
            alert(JSON.stringify(inputs));
        }
    
    return (
        <div>
          <form className="newElement" onSubmit={ handleSubmit }>
            <h3>New Company</h3>
            <input 
            type="text"
            placeholder="Company name"
            name = "company_name"
            value = {inputs.company_name || ""}
            onChange={ handleChange }
            />
            <input 
            type="number"
            placeholder="TVA"
            name = "tva"
            value = {inputs.tva || ""}
            onChange={ handleChange }
            />
            <input 
            type="text"
            placeholder="Country"
            name = "country"
            value = {inputs.country || ""}
            onChange={ handleChange }
            />
            <button type="submit">Save</button>

          </form>
        </div>
    )
}

export default NewCompany;