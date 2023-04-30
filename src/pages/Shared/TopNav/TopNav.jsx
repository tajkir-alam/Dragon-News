import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {FaRegUserCircle} from 'react-icons/fa'

const TopNav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-4">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                <FaRegUserCircle className='fs-1'></FaRegUserCircle>
                            </Nav.Link>
                            <Button variant='dark' className='rounded-0 px-4 '>Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default TopNav;