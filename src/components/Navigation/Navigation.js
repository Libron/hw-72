import React from 'react';

import {NavLink as RRNavLink} from "react-router-dom";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

const Navigation = () => {
    return (
        <Navbar color="dark" dark expand="md" style={{"marginBottom": "30px"}}>
            <NavbarBrand href="/">Turtle Pizza Admin</NavbarBrand>
            <NavbarToggler />
            <Collapse isOpen navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RRNavLink} to="/" exact>Dishes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RRNavLink} to="/orders" exact>Orders</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;