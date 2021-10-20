import React from "react";
import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="info" light expand="md">
      <Link to="/" className="text-white">
        My Book Search
      </Link>
    </Navbar>
  );
};

export default Header;
