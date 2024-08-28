import React from "react";
import { Nav,Navbar,NavDropdown,Container} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
function MyNavbar() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
      >
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: "gray" }}>
            Dashboard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavDropdown" />
          <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="me-auto">
              <NavDropdown
                title="Manage Asset"
                id="manage-asset-dropdown"
                style={{ color: "white" }}
              >
                <LinkContainer to="/ViewAsset">
                  <NavDropdown.Item href="">View Asset</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/AddAsset">
                  <NavDropdown.Item href="#">Add New Asset</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Item href="#">Edit Asset</NavDropdown.Item>
                <NavDropdown.Item href="#">Delete Asset</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Assign Asset" id="assign-asset-dropdown">
                <NavDropdown.Item href="#">Assign to User</NavDropdown.Item>
                <NavDropdown.Item href="#">Bulk Assign</NavDropdown.Item>
                <NavDropdown.Item href="#">Manage Assignments</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Track Maintenance"
                id="track-maintenance-dropdown"
              >
                <NavDropdown.Item href="#">
                  Maintenance Schedule
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Report Issues</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Maintenance History
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Reports" id="reports-dropdown">
                <NavDropdown.Item href="#">Monthly Reports</NavDropdown.Item>
                <NavDropdown.Item href="#">Annual Reports</NavDropdown.Item>
                <NavDropdown.Item href="#">Custom Reports</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-flex justify-content-center flex-grow">
              {" "}
              {/* Center alignment */}
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: "400px" }}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <Nav>
              <Nav.Link href="#">
                <i
                  class="fa-solid fa-gear"
                  style={{ fontSize: "1.3rem", color: "gray" }}
                ></i>
              </Nav.Link>
              <Nav.Link href="#">
                <i
                  class="fa-solid fa-right-from-bracket"
                  style={{ fontSize: "1.3rem", color: "gray" }}
                ></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
