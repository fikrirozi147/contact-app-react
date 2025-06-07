import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../images/catgirl.png";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    const {removeContactHandler} = useContactsCrud();
    const [selectedContact, setSelectedContact] = useState(null);

    // Execute when the user clicks the delete icon
    const onConfirmDelete = () => showDeleteDialog(props.contact);

    // Called when the trash icon is clicked
    const showDeleteDialog = (contact) => {
        setSelectedContact(contact);
    };

    // Function to delete the contact
    const deleteContact = (id) => {
        removeContactHandler(id);
    }

    // Called when the user confirms deletion
    const confirmDelete = () => {
        deleteContact(selectedContact.id);
        setSelectedContact(null);
    };


    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i
                className="trash alternate outline icon right floated"
                style={{ color: "red", marginTop: "10px", marginBottom: "10px", marginLeft: "10px" }}
                onClick={onConfirmDelete}
            ></i>
            <Link to={`/edit/${id}`} state={{ contact: props.contact }}>
                <i
                    className="edit alternate outline icon right floated"
                    style={{ color: "grey", marginTop: "10px", marginBottom: "10px", marginLeft: "10px" }}
                ></i>
            </Link>

            {/* Delete Confirmation Modal */}
            {selectedContact && (
                <div className="ui dimmer modals visible active" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="ui basic modal visible active">
                        <div className="ui icon header">
                            <i className="trash alternate icon"></i>
                            Delete Contact
                        </div>
                        <div className="content" style={{ textAlign: "center" }}>
                            <p>
                                Are you sure you want to delete <strong style={{ color: "orange" }}>{selectedContact.name}</strong> from your contact list?
                            </p>
                        </div>
                        <div className="actions">
                            <div className="ui red basic cancel inverted button" onClick={() => setSelectedContact(null)}>
                                <i className="remove icon"></i>
                                No
                            </div>
                            <div className="ui green ok inverted button" onClick={confirmDelete}>
                                <i className="checkmark icon"></i>
                                Yes
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>


    );
};

export default ContactCard;
