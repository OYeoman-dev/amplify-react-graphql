import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SignOut from "../SignOut/SignOut";

function NavBarTop() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/FishFamilyLogo.svg"
              width="30px"
              height="30px"
              className="d-inline-block align-top"
            />{" "}
            Fish Family
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/all-fish">Fish Catalog</Nav.Link>
            <Nav.Link href="/add-fish">Add Fish</Nav.Link>
          </Nav>
          <SignOut />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarTop;
