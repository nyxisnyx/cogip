import React, { useState, useEffect } from "react";

const LastContacts = ({ user }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch(`/api/contacts`); 
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setContacts(data);
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
                        <tr key={contact.id}>
                            <td>{contact.number}</td>
                            <td>{contact.date}</td>
                            <td>{contact.company}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LastContacts;