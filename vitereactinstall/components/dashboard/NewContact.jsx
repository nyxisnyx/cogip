import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";

const NewContact = () => {
    const [inputs, setInputs] = useState({});
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await fetch('/api/admin/:key/companies/all');
                if (response.ok) {
                    const data = await response.json();
                    setCompanies(data);
                } else {
                    console.error('Failed to fetch companies');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchCompanies();
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('/api/admin/api/contact/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            });

            if (response.ok) {
                alert('Contact added successfully');
            } else {
                alert('Failed to add contact');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the contact');
        }
    };

    return (
        <div className="dashboard-main-container">
            <DashboardHeader />
            <form className="newElement" onSubmit={ handleSubmit }>
                <h3>New Contact</h3>
                <select
                    name="company_id"
                    value={inputs.company_id || ""}
                    onChange={handleChange}
                >
                    <option value="">Select Company</option>
                    {companies.map((company) => (
                        <option key={company.company_id} value={company.company_id}>
                            {company.company_name}
                        </option>
                    ))}
                </select>
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