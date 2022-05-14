import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>

                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to="/manageinventory">Manage Inventory</Nav.Link>
                        <Nav.Link as={Link} to="/additems">Add Items</Nav.Link>
                        <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                        {/* <button className='border border-0'>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </button> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;