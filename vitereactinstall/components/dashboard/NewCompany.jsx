import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";

const NewCompany = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const apiUrl = "http://becodecogip2.rbarkersw.com/";
            // const response = await fetch(`${apiUrl}admin/:key/companie/add`, 
            const response = await fetch('/api/admin/api/companie/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)               
            });

            if (response.ok) {
                alert('Company added successfully');
            } else {
                alert('Failed to add company');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the company');
        }
    };

    return (
        <div className="dashboard-main-container">
            <DashboardHeader />
            <form className="newElement" onSubmit={ handleSubmit }>
                <h3>New Company</h3>
                <input
                    type="text"
                    placeholder="Company name"
                    name="name"
                    value={inputs.name || ""}
                    onChange={ handleChange }
                />
              <select
                    name="type_id"
                    value={inputs.type_id || ""}
                    onChange={handleChange}
                >
                    <option value="">Select Type</option>
                    <option value="1">Client</option>
                    <option value="2">Supplier</option>
                    
                </select>
                <input
                    type="number"
                    placeholder="Payment deadline"
                    name="payment_deadline"
                    value={inputs.payment_deadline || ""}
                    onChange={ handleChange }
                />
                <input
                    type="number"
                    placeholder="TVA"
                    name="tva"
                    value={inputs.tva || ""}
                    onChange={ handleChange }
                />
                <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={inputs.country || ""}
                    onChange={ handleChange }
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default NewCompany;
