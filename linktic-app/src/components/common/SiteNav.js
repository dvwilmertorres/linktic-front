import { Authenticator } from '@aws-amplify/ui-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el ícono del carrito

function SiteNav(props) {
    const handleLogout = () => {
        props.logOut();
    }

    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand><Nav.Link href="/">Ecommerce</Nav.Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-md-auto">
                            {}
                            <Nav.Link href="/cart">
                                <FaShoppingCart />
                                {' '}
                                {props.cartItemCount > 0 && (
                                    <span className="cart-count">{props.cartItemCount}</span>
                                )}
                            </Nav.Link>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default SiteNav;
