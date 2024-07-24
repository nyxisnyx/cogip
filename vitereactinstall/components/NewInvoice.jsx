import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";

const NewInvoice = () => {
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
            <>
            <DashboardHeader />
            
        <form className="newElement" onSubmit={ handleSubmit }>
            <h3>New invoice</h3>
            <input 
            type="text"
            placeholder="Reference"
            name = "reference"
            value = {inputs.reference || ""}
            onChange={ handleChange }
            />
            <input 
            type="number"
            placeholder="Price"
            name = "price"
            value = {inputs.price || ""}
            onChange={ handleChange }
            />
            <input 
            type="text"
            placeholder="Company name"
            name = "name"
            value = {inputs.name || ""}
            onChange={ handleChange }
            />
            <button type="submit">Save</button>

          </form>
        </>
          
        </div>
    )
}

export default NewInvoice;