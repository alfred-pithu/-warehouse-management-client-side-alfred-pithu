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
        // console.log(user);
    }
    return (
        <div className='mb-5 '>
            <Navbar style={{ backgroundColor: 'white' }} className='container-fluid px-0 shadow  fixed-top '>
                {/* bg="light" variant="light" */}

                <Container className=' d-lg-flex flex-lg-row d-flex flex-column align-items-center justify-content-lg-between justify-content-center'>

                    <Nav className=" mb-lg-0 mb-3 ">
                        <Navbar.Brand as={Link} to="/">ISHOP INC</Navbar.Brand>
                        <Nav.Link className='fw-bold' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='fw-bold' as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link className='fw-bold text-muted' href='/home#track'>Track</Nav.Link>
                        <Nav.Link className='fw-bold text-muted' href='/home#supplier'>Supplier</Nav.Link>
                    </Nav>

                    <Nav className=' '>
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

