import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';


const StyledNavBar = styled(Navbar)`
    background-color: #101010!important; 
    // font-family: Montserrat;
`;

function TopNav(props) {
    return (
        <div className="topNav">
            <StyledNavBar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    JP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" pullRight>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" pullRight>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Feedback</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </StyledNavBar>
        </div>
    );
}
export default TopNav;