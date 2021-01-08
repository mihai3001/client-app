import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, Collapse } from 'bootstrap-4-react';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter, Link, NavLink } from 'react-router-dom';


const NavigationBar = ({ location }) => {
    const values = ['Coins', 'Exchanges', 'Charts']
    return (
        <React.Fragment>
            <Navbar expand="lg" dark bg="dark" mb="3">
                <Navbar.Brand href="#">Crypto</Navbar.Brand>
                <Navbar.Toggler target="#navbarColor1" />
                <Collapse navbar id="navbarColor1">
                    <Navbar.Nav mr="auto">
                        {
                            values.map(value =>
                            (
                                 <LinkContainer to={`/${value.toLowerCase()}`}  key={value}>
                                        <Nav.ItemLink>
                                            {value}
                                        </Nav.ItemLink>
                                     </LinkContainer>
                            ))
                        }
                    </Navbar.Nav>
                    <Form inline my="2 lg-0">
                        <Form.Input type="search" placeholder="Search" mr="sm-2" />
                        <Button outline info my="2 sm-0">Search</Button>
                    </Form>
                </Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default withRouter(NavigationBar);