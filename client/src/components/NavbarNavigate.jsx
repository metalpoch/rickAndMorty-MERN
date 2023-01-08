import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarNavigate = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>Rick And Morty MERN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link target="_blank" href="https://github.com/metalpoch/">
              Github
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://www.instagram.com/keiberup/"
            >
              Instagram
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://www.linkedin.com/in/keiber-urbila/"
            >
              LinkedIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNavigate
