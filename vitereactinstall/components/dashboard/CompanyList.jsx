import React, { useState, useEffect } from "react";


const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                //const apiUrl = "http://becodecogip2.rbarkersw.com/";
                const response = await fetch(`/api/companies/all/200/1`); 
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setCompanies(data.params);
              } catch (error) {
                console.error("Error fetching companies:", error);
              }
            };
        fetchCompanies();
    }, []);

    return (
        <div className="LastCompanies">
            <h3>Companies</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>TVA</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {companies && companies.map(company => (
                        <tr key={company.id}>
                            <td>{company.name}</td>
                            <td>{company.tva}</td>
                            <td>{company.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompanyList;