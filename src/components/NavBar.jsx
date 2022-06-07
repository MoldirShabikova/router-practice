import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Nav pills>
        <NavItem>
          <NavLink active>
            <Link to="/" style={{ color: "white" }}>Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/contacts">Contacts</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            {" "}
            <Link to="/articles">Article List</Link>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;
