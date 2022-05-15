import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth)
    }

    if (user) {
        console.log(user);
    }
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link className='fw-bold' as={Link} to="/home">Home</Nav.Link>

                        <Nav.Link className='fw-bold' as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>

                        {
                            user ? <><Nav.Link className='fw-bold' as={Link} to="/manageinventory">Manage Inventory</Nav.Link>
                                <Nav.Link className='fw-bold' as={Link} to="/additems">Add Items</Nav.Link>
                                <Nav.Link className='fw-bold' as={Link} to="/myitems">My Items</Nav.Link></> : ''
                        }

                        <Nav.Link className='fw-bold' as={Link} to="/login"><button onClick={logOut} className='border border-2 rounded-1' >
                            {
                                user ? 'Logout' : 'Login'
                            }


                        </button></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

