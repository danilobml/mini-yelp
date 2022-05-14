import "./MyNavbar.css";
import { Image, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.png";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image className="ms-0" src={logo} style={{ width: "160px", height: "60px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Link to="/" className="custom-link">
              Home{" "}
            </Link>
            <Link to="/register" className="custom-link">
              Register{" "}
            </Link>
            <Link to="/login" className="custom-link">
              Login{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
