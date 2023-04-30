import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-4">
                            <Link to={'/'} className=' nav-link'>Home</Link>
                            <Link to={'#'} className=' nav-link'>About</Link>
                            <Link to={'#'} className=' nav-link'>Career</Link>
                        </Nav>
                        <Nav className='d-flex align-items-center gap-2'>
                            <FaRegUserCircle className='fs-2'></FaRegUserCircle>
                            <Nav.Link href="#deets">
                                <Button variant='dark' className='rounded-0 px-5'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default TopNav;