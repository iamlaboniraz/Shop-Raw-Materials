import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { Nav, Navbar } from 'react-bootstrap';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="w3-sidebar w3-teal w3-bar-block" style={{ width: "15%" }}>
            <Link style={{ marginTop: "30px" }} className="w3-bar-item w3-button sidebar" to="/manageProduct"><AllInboxIcon></AllInboxIcon> Manage Product</Link>
            <Link className="w3-bar-item w3-button sidebar" to="/admin"><AddIcon></AddIcon> Add Product</Link>
            <Link className="w3-bar-item w3-button sidebar" to="/admin"><EditIcon></EditIcon> Edit Product</Link>


        </div>
    );
};

export default Sidebar;