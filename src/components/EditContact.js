import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext"; // Assuming you have a context for CRUD operations

const EditContact = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Use navigate from location if needed
    const {id, name, email} = location.state.contact; // Get the contact details from the state
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const { updateContactHandler } = useContactsCrud(); // Assuming you have a context or function to handle updates

    // constructor(props) {
    //     super(props);
    //     const { name, email } = props.location.state.contact; // Get the contact details from the state
    //     this.state = {
    //         id: props.location.state.contact.id, // Get the contact ID from the state
    //         name: name || "", // Initialize name with the contact's name or empty string
    //         email: email || "" // Initialize email with the contact's email or empty string
    //     };
    // }

    const update = (e) => {
        e.preventDefault();
        if (newName === "" || newEmail === "") {
            alert("All the fields are mandatory!");
            return;
        }
        // Call the updateContactHandler with the updated contact details
        // and reset the form fields
        updateContactHandler({ id, name: newName, email: newEmail });
        setNewName("");
        setNewEmail("");
        navigate("/"); // Navigate back to the contact list after updating
    };

        return (
            <div className="ui inverted segment main">
                <h2 style={{ marginTop: "80px" }}>Edit Contact</h2>
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <a className="ui blue ribbon label">Name</a>
                        <input type="text" name="name" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
                    </div>
                    <div className="field">
                        <a className="ui red ribbon label">Email</a>
                        <input type="text" name="email" placeholder="Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                    </div>
                    <button className="fluid ui inverted yellow button" style={{ marginBottom: "30px", marginLeft: "auto", marginRight: "auto", display: "block" }} type="submit">Update</button>
                </form>
            </div>
        );
}

export default EditContact;