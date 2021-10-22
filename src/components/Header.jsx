import React from "react";
import {Navbar} from "reactstrap";
import {Link} from "react-router-dom";
import {GiBookshelf} from "react-icons/gi"
import googlebookslogo from "./googlebooks.png"

const Header = () => {
    return (
        <Navbar expand="md" style={{backgroundColor: "#64485C"}}>
            <Link to="/" className="text-white ms-2">
                <GiBookshelf className="text-white me-2" size={30}/>
                My Book Search
            </Link>
            <div className="ms-auto">
                <img src={googlebookslogo} height="30px" className="me-4" alt="google book logo"/>
            </div>
        </Navbar>
    );
};

export default Header;
