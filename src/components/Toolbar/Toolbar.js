import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink,} from 'reactstrap';
import {NavLink as Link} from "react-router-dom";
const Toolbar = () => {
    return (
        <header className='Main-toolbar'>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to='/' exact>
                    Turtle Pizza Admin
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to='/' exact >Dishes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/orders' exact>Orders</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Toolbar;
