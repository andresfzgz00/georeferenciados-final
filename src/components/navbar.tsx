import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/store">Stock</Nav.Link>
                    <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )

};

export default NavBar;