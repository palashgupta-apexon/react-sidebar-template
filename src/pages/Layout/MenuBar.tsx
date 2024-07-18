import * as React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <div className="userInitials">
              <Link className='navbar-brand' to='/'>
                TU
              </Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav ms-auto">
                <Link className='nav-link' to='/about'>About US</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default React.memo(MenuBar);