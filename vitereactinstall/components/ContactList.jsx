import React, { useState, useEffect } from "react";

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                //const apiKey = "api";
                const response = await fetch(`http://becodecogip.rbarkersw.com//contacts/all`); 
                
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setContacts(data);
                console.log(data);
              } catch (error) {
                console.error("Error fetching contacts:", error);
              }
            };
        fetchContacts();
    }, []);

    return (
        <div className="contacts">
            <h3>Contacts</h3>
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

export default ContactList;