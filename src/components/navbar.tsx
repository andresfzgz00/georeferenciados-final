import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="/">Paletería</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/cart">Carrito</Nav.Link>
                    <Nav.Link as={Link} to="/orders">Ordenes</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )

};

export default NavBar;