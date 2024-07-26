import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";

const NewContact = () => {
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
        <div className="dashboard-main-container">
            <DashboardHeader />
          <form className="newElement" onSubmit={ handleSubmit }>
            <h3>New Contact</h3>
            <input 
            type="text"
            placeholder="First name"
            name = "first_name"
            value = {inputs.first_name || ""}
            onChange={ handleChange }
            />
            <input 
            type="text"
            placeholder="Last name"
            name = "last_name"
            value = {inputs.last_name || ""}
            onChange={ handleChange }
            />
            <input 
            type="text"
            placeholder="Company name"
            name = "company_name"
            value = {inputs.company_name || ""}
            onChange={ handleChange }
            />
            <input 
            type="email"
            placeholder="Email"
            name = "email"
            value = {inputs.email || ""}
            onChange={ handleChange }
            />
            <input 
            type="tel"
            placeholder="Phone"
            name = "phone"
            value = {inputs.phone || ""}
            onChange={ handleChange }
            />            
            <button type="submit">Save</button>
          </form>

        </div>
    )
}

export default NewContact;