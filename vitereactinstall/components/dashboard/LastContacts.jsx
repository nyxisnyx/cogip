import React, { useState, useEffect } from "react";

const LastContacts = ({ user }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const apiUrl = "http://becodecogip2.rbarkersw.com/"
                const apiKey = "api";
                const response = await fetch(`${apiUrl}/admin/${apiKey}/all/5`); 
                
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setContacts(data.Contacts);
                console.log(data.Contacts);
              } catch (error) {
                console.error("Error fetching contacts:", error);
              }
            };
        fetchContacts();
    }, []);

    return (
        <div className="LastContacts">
            <h3>Last Contacts</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.contact_id}>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LastContacts;