import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const {addContactHandler} = useContactsCrud();
    const navigate = useNavigate();

    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        addContactHandler({ name, email });
        setName("");
        setEmail("");
        navigate("/");
    };


        return (
            <div className="ui inverted segment main">
                <h2 style={{ marginTop: "80px" }}>Add Contact</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <a className="ui blue ribbon label">Name</a>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="field">
                        <a className="ui red ribbon label">Email</a>
                        <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className="fluid ui inverted yellow button" style={{ marginBottom: "30px", marginLeft: "auto", marginRight: "auto", display: "block" }} type="submit">Add</button>
                </form>
            </div>
        );
}

export default AddContact;