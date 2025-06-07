import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/catgirl.png";

const ContactDetail = () => {
    const location = useLocation();
    const { id, name, email } = location.state.contact;
    return (
        <div className="main" style={{ marginTop: "80px" }}>
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="ui center aligned container">
                <Link to="/">
                    <div className="ui animated black button" tabIndex="0">
                        <div className="visible content">Back to Contact List</div>
                        <div className="hidden content">
                            <i className="left arrow icon"></i>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;