import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaHome, FaUsers, FaGraduationCap, FaUser, FaSearch } from 'react-icons/fa'; // Import icons for navigation links

function TalentSpaceNavbar() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Navbar expand="lg" variant="light" className="shadow-sm fixed-top" style={{ backgroundColor: 'transparent', borderBottom: 'none' }}>
      <Container>
        <Navbar.Brand href="/" className="fw-bold">Talent Space</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex ms-auto align-items-center position-relative">
            <Button variant="link" onClick={toggleSearch} className="search-icon">
              <FaSearch />
            </Button>
            <FormControl
              type="search"
              placeholder="Search"
              className={`search-field ${showSearch ? 'visible' : ''}`}
              aria-label="Search"
            />
          </Form>
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className="fw-bold"><FaHome className="me-1" /> Home</Nav.Link>
            <Nav.Link href="/network" className="fw-bold"><FaUsers className="me-1" /> Network</Nav.Link>
            <Nav.Link href="/learning" className="fw-bold"><FaGraduationCap className="me-1" /> Learning</Nav.Link>
            <Nav.Link href="/profile" className="fw-bold"><FaUser className="me-1" /> Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TalentSpaceNavbar;
