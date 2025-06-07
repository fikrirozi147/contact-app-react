import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList = () => {
    const { contacts, retrieveContacts, searchTerm, searchResults, searchHandler } = useContactsCrud();

    useEffect(() => {
        retrieveContacts();
    }, []);

    const renderContactList = (searchTerm.length < 1 ? contacts: searchResults).map((contact) => {
        return (
            <ContactCard
                key={contact.id}
                contact={contact}
            />
        );
    });

    const onUserSearch = (e) => {
        searchHandler(e.target.value);
    }

    return (
        <div className="main">
            <h2 style={{ marginTop: "80px" }}>
                Contact List
                <Link to="/add">
                    <button className="ui button yellow right floated">Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="fluid ui icon input">
                    <input type="text" placeholder="Search Contacts..." className="prompt" value={searchTerm} onChange={onUserSearch} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : <h3 style={{ textAlign: "center", marginTop: "60px" }}>No contacts found.</h3>}</div>

        </div>
    );
};

export default ContactList;
