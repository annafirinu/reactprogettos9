import netflixlogo from "/netflix_logo.png";
import kidslogo from "/kids_icon.png";
import avatarlogo from "/avatar.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = function () {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <img height={40} src={netflixlogo} alt="Logo Netflix" />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Tv Shows</Nav.Link>
            <Nav.Link href="#home">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#home">My List</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#home">KIDS</Nav.Link>
            <Nav.Link href="#link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </Nav.Link>
            <NavDropdown
              title={<img src={kidslogo} className="img" />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                <img src={kidslogo} className="img" />
                KIDS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <img src={avatarlogo} className="img" />
                Anna
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
