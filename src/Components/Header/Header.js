import React from 'react';
import { useContext } from 'react';
import { Nav,Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
const Header = () => {
    const [loggedInUser] = useContext(UserContext)
    console.log("logged in user = ",loggedInUser)
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Navbar.Brand href="/">Fresh Valley</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link><Link className="btn btn-info" to="/">Home</Link></Nav.Link>
            <Nav.Link><Link className="btn btn-info" to="/orders">Order</Link></Nav.Link>
            <Nav.Link><Link className="btn btn-info" to="/admin">Admin</Link></Nav.Link>
            <Nav.Link><Link className="btn btn-info" to="/form">Deals</Link></Nav.Link>
            <button className="btn btn-dark">
            <Nav.Link href="/login">{loggedInUser.name || loggedInUser.displayName ? loggedInUser.name || loggedInUser.displayName : 'Login'}</Nav.Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;